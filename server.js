/**
 * @flow
 */
import express from "express";
import morgan from "morgan";

// Initialize http server
const app = express();
const path = require("path");
const port = process.env.PORT || 1512;

app.use(morgan("dev")); // log every request to the console

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Launch the server on the port 1512
app.listen(port, (req, res) => {
  console.log(`server listening on port: ${port}`);
});
