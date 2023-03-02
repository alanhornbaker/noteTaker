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
const PORT = process.env.PORT || 3001;
// const PORT = 3001;
// Set port variable to a number.
//
//
//
//       1.4 - Middleware
app.use(express.static("public"));
// Create middleware for static files and point it towards the "public" folder.
//
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Middleware that sets up the Express app to handle data parsing (url, json).
//
// const middleware = (req, res, next) => {
//   // ANSI escape code that instructs the terminal to print in yellow
//   const yellow = "\x1b[33m%s\x1b[0m";

//   // Log out the request type and resource
//   console.log(yellow, `${req.method} request to ${req.path}`);

//   // Built-in express method to call the next middleware in the stack.
//   next();
// };
//Custom Middleware

// app.use(middleware);
// Calls middleware.
//
//
//         1.5 - API Routes
app.get("/api/notes", (req, res) => {
  readFileAsync("./db/db.json", "utf8").then(function (data) {
    notes = [].concat(JSON.parse(data));
    res.json(notes);
  });
});
// API "get" Request
//
app.post("/api/notes", (req, res) => {
  const note = req.body;
  readFileAsync("./db/db.json", "utf8")
    .then(function (data) {
      const notes = [].concat(JSON.parse(data));
      note.id = notes.length + 1;
      notes.push(note);
      return notes;
    })
    .then(function (notes) {
      writeFileAsync("./db/db.json", JSON.stringify(notes));
      res.json(note);
    });
});
// API "post" Request
//
app.delete("/api/notes/:id", (req, res) => {
  const idToDelete = parseInt(req.params.id);
  readFileAsync("./db/db.json", "utf8")
    .then(function (data) {
      const notes = [].concat(JSON.parse(data));
      const newNotesData = [];
      for (let i = 0; i < notes.length; i++) {
        if (idToDelete !== notes[i].id) {
          newNotesData.push(notes[i]);
        }
      }
      return newNotesData;
    })
    .then(function (notes) {
      writeFileAsync("./db/db.json", JSON.stringify(notes));
      res.send("Success!");
    });
});
// API "delete" Request
//
//
//         1.6 - HTML Routes
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});
//
//
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});
//
//
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});
//
//
//
//         1.7 - Listening
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
