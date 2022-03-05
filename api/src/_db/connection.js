"use strict";
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const { DB_URL } = require("../config/config");

module.exports = (async function () {
  const mongoServer = await MongoMemoryServer.create();
  const uri = await mongoServer.getUri();

  const mongooseOpts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  mongoose.connect(uri, mongooseOpts);
  // To connect remote db or local db
  // mongoose.connect(DB_URL, mongooseOpts);

  // mongoose.set('useCreateIndex', true);

  // CONNECTION EVENTS
  // When successfully connected
  mongoose.connection.on("connected", function () {
    console.log("DB connection connected.");
  });

  // If the connection throws an error
  mongoose.connection.on("error", function (error) {
    console.log("DB connection error: " + error);
  });

  // When the connection is disconnected
  mongoose.connection.on("disconnected", function () {
    console.log("DB connection disconnected.");
  });
})();
