const express = require("express");
const http = require("http");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const dishRouter = require("./routes/dishes");
const promoRouter = require("./routes/promotions");
const leaderRouter = require("./routes/leaders");

// app constants
const hostname = "localhost";
const port = 8000;

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());

// endpoints
app.use("/dishes", dishRouter);
app.use("/promotions", promoRouter);
app.use("/leaders", leaderRouter);

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
