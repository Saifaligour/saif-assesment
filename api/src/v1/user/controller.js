const User = require("./model");
const { query } = require("../../config/message");

exports.add = async ({ _id, ...rest }) => {
  try {
    if (_id) {
      await User.findOneAndUpdate({ _id }, rest);
      return query.update;
    } else {
      User.create(rest);
      return query.insert;
    }
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};
