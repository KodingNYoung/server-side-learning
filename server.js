const http = require("http");

// define the host variables
const hostname = "localhost";
const port = 3000;

// creating server
const server = http.createServer((req, res) => {
  console.log(req.headers);

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>Hello World!</h1></body></html>");
});

// start server
server.listen(port, hostname, () => {
  console.log(`Listening to requests at http://${hostname}:${port}`);
});
