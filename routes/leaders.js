const express = require("express");
const bodyParser = require("body-parser");

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("Will send all the leaders to you.");
  })
  .post((req, res, next) => {
    res.end("The leader has been created: " + JSON.stringify(req.body));
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supposed on /leaders");
  })
  .delete((req, res, next) => {
    res.end("Deleting all the leaders.");
  });

leaderRouter
  .route("/:leaderId")
  .get((req, res, next) => {
    res.end(
      "Will send the details of leader with id '" +
        req.params.leaderId +
        "' to you."
    );
  })
  .post((req, res, next) => {
    res.end("POST operation not supposed on /leaders/{id}");
  })
  .put((req, res, next) => {
    res.write("Updated the leader with id: " + req.params.leaderId + "\n");
    res.end("Updated leader is " + JSON.stringify(req.body));
  })
  .delete((req, res, next) => {
    res.end("Deleted leader with id: " + req.params.leaderId);
  });

module.exports = leaderRouter;
