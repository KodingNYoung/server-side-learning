const express = require("express");
const http = require("http");
const morgan = require("morgan");
const bodyParser = require("body-parser");

// app constants
const hostname = "localhost";
const port = 8000;

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());

// endpionts
app.all("/dishes", (req, res, next) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  next();
});
app.get("/dishes", (req, res, next) => {
  res.end("Will send all the dishes to you.");
});
app.post("/dishes", (req, res, next) => {
  res.end("The dish has been created: " + req.body.name);
});
app.put("/dishes", (req, res, next) => {
  res.statusCode = 403;
  res.end("PUT operation not supposed on /dishes");
});
app.delete("/dishes", (req, res, next) => {
  res.end("Deleting all the dishes.");
});
app.get("/dishes/:dishId", (req, res, next) => {
  res.end(
    "Will send the details of dish with id '" + req.params.dishId + "' to you."
  );
});
app.post("/dishes/:dishId", (req, res, next) => {
  res.end("POST operation not supposed on /dishes/{id}");
});
app.put("/dishes/:dishId", (req, res, next) => {
  res.write("Updated the dish with id: " + req.params.dishId + "\n");
  res.end("Updated dish is " + JSON.stringify(req.body));
});
app.delete("/dishes/:dishId", (req, res, next) => {
  res.end("Deleted dish with id: " + req.params.dishId);
});

app.use(express.static(__dirname + "/public"));

app.use((req, res, next) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>An express server</h1></body></html>");
});

const server = http.createServer(app);
server.listen(port, hostname, () => {
  console.log(`Listen at http://${hostname}:${port}`);
});
