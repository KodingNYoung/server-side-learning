const express = require("express");
const bodyParser = require("body-parser");

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("Will send all the dishes to you.");
  })
  .post((req, res, next) => {
    res.end("The dish has been created: " + JSON.stringify(req.body));
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supposed on /dishes");
  })
  .delete((req, res, next) => {
    res.end("Deleting all the dishes.");
  });

dishRouter
  .route("/:dishId")
  .get((req, res, next) => {
    res.end(
      "Will send the details of dish with id '" +
        req.params.dishId +
        "' to you."
    );
  })
  .post((req, res, next) => {
    res.end("POST operation not supposed on /dishes/{id}");
  })
  .put((req, res, next) => {
    res.write("Updated the dish with id: " + req.params.dishId + "\n");
    res.end("Updated dish is " + JSON.stringify(req.body));
  })
  .delete((req, res, next) => {
    res.end("Deleted dish with id: " + req.params.dishId);
  });

module.exports = dishRouter;
