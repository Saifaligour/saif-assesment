const Router = require("express").Router();

const controller = require("./controller");
const serviceResponse = require("../../_helper/serviceResponse");
const {
  apiStatus: { success, failed },
} = require("../../config/constant");

Router.post("/submit-form", (req, res) => {
  controller
    .add(req.body)
    .then((result) => {
      res.send(new serviceResponse({ result, status: success }));
    })
    .catch((error) => {
      res.send(new serviceResponse({ error, status: failed }));
    });
});

module.exports = Router;
