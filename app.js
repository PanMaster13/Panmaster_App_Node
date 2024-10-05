var express = require("express");
var app = express();

var packageInfo = require("./package.json");
var portNumber = process.env.portNumber || 5003;

app.get("/", (request, response) => {
  console.log("Route '/' Called");
  response.send("Hello World.");
});

app.get("/Version", (request, response) => {
  console.log("Route '/Version' Called");
  response.send("API Version: " + packageInfo.version);
});

var server = app.listen(portNumber, () => {
  console.log("Panmaster App Node running successfully with port:", portNumber);
});
