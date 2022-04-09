const http = require("http");
const fs = require("fs");
const path = require("path");

// define the host variables
const hostname = "localhost";
const port = 8000;

// creating server
const server = http.createServer((req, res) => {
  console.log("Request for ", req.url, " on ", req.method, " method");

  if (req.method === "GET") {
    const fileUrl = req.url === "/" ? "/index.html" : req.url;
    const filePath = path.resolve("./public" + fileUrl);
    const fileExt = path.extname(filePath);

    if (fileExt === ".html") {
      fs.exists(filePath, exists => {
        if (exists) {
          res.statusCode = 200;
          res.setHeader("Content-Type", "text/html");
          fs.createReadStream(filePath).pipe(res);
          console.log("The file exists..");
        } else {
          res.statusCode = 404;
          res.setHeader("Content-Type", "text/html");
          res.end(
            "<html><body><h1>Page Not Found at: " +
              fileUrl +
              "</h1></body></html>"
          );
          console.log("This is an error because file doesn't exist.");
        }
      });
    } else {
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/html");
      res.end(
        "<html><body><h1>Page Not Found at: " +
          fileUrl +
          "</h1><p>Go to a .html route</p></body></html>"
      );
      console.log("Go to a .html route");
    }
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.end(
      "<html><body><h1>Request method: " +
        req.method +
        " is not supported</h1></body></html>"
    );
    console.log("Request is not get");
  }
});

// start server
server.listen(port, hostname, () => {
  console.log(`Listening to requests at http://${hostname}:${port}`);
});
