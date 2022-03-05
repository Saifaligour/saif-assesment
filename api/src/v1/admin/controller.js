const Users = require("../user/model");

exports.get = async ({ page = 1, limit = 10, _id, search }) => {
  try {
    if (_id === undefined || _id === "undefined") {
      const filter =
        search === "" || search === undefined || search === "undefined"
          ? {}
          : {
              $or: [
                { fullName: { $regex: new RegExp(search, "gmi") } },
                { email: { $regex: new RegExp(search, "gmi") } },
                { message: { $regex: new RegExp(search, "gmi") } },
              ],
            };
      const res = await Users.find(filter)
        .skip((page - 1) * limit)
        .limit(limit);
      const total = await Users.countDocuments(filter);

      return { users: res, total };
    } else {
      return Users.findOne({ _id: _id });
    }
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};
