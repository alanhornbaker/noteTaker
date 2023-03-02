//      1.1 - Requiremnts:
const express = require("express");
// Require a module called “express”, and save that as “express”, as a const.
const path = require("path");
// Require a module called “path”, and save that as “peth”, as a const.
const fs = require("fs");
// Require a file system.
const util = require("util");
// Require util
//
//
//      1.2 - Asynchronous Processes
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
//
//
//       1.3 - Setting Up Server
const app = express();
// This is the same as:
// function express() {
//   some properties and methods,, work, etc I.E.:
//   function get() {
//     some properties and methods,, work, etc I.E.:
//   }
//   function post() {
//     some properties and methods,, work, etc I.E.:
//   }
// }
const PORT = 3001;
// Set port variable to a number.
// Other option:
// const port = process.env.PORT
//
//
//
//       1.4 - Middleware
app.use(express.static("public"));
// Create middleware for static files and point it towards the "public" folder.
//
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Sets up the Express app to handle data parsing (url, json).
//
const middleware = (req, res, next) => {
  // ANSI escape code that instructs the terminal to print in yellow
  const yellow = "\x1b[33m%s\x1b[0m";

  // Log out the request type and resource
  console.log(yellow, `${req.method} request to ${req.path}`);

  // Built-in express method to call the next middleware in the stack.
  next();
};
app.use(middleware);
// Calls middleware.
//
//
//       1.5 - API Route ~ "GET" Request
app.get("/api/notes", (req, res) => {
  readFileAsync("./develop/db/db.json", "utf8").then(function (data) {
    notes = [].concat(JSON.parse(data));
    res.json(notes);
  });
});
