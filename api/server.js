const http = require("http");
const cors = require("cors");
const path = require("path");
const helmet = require("helmet");
const logger = require("morgan");
const express = require("express");
const bodyParser = require("body-parser");

require("./src/_db/connection");
const { PORT } = require("./src/config/config");
const debug = require("debug")("demo:server");

const app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(helmet());
// app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "10mb" }));

//options for cors midddleware
let allowedOrigins = ["*"];
app.use(
  cors({
    credentials: true,
    origin: (origin, callback) => {
      // allow requests with no origin
      // (like mobile apps or curl requests)
      //console.log(origin);
      return callback(null, true);
      if (!origin) return callback(null, true);

      if (allowedOrigins.indexOf(origin) === -1) {
        let msg =
          "The CORS policy for this site does not " +
          "allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

/**
 * Get port from environment and store in Express.
 */

var port = process.env.PORT || PORT;
app.set("port", port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  console.log(`server is running.. on port :${port}`);

  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
}

app.use(express.static(path.resolve("src/views")));
require("./src/routes/routes")(app);
app.use("/", (req, res) => {
  res.send(
    `<div align="center" style =""><h1> WELCOME IN WhereWego. </h1></div>`
  );
});
