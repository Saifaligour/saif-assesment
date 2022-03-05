module.exports = function (app) {
  app.use("/admin", require("../v1/admin/routes"));
  app.use("/user/", require("../v1/user/routes"));
};
