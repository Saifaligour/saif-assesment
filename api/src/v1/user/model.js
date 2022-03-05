var mongoose = require("mongoose");

var { collection } = require("../../config/constant");

const Schema = new mongoose.Schema({
  fullName: { type: String },
  email: { type: String },
  message: { type: String },
  ip: { type: String },
  createdOn: { type: Date, default: Date.now },
  updatedOn: { type: Date, default: Date.now },
});

module.exports = mongoose.model(collection.user, Schema);
