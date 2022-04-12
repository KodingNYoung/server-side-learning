const express = require("express");
const bodyParser = require("body-parser");

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("Will send all the promotions to you.");
  })
  .post((req, res, next) => {
    res.end("The promotion has been created: " + JSON.stringify(req.body));
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supposed on /promotions");
  })
  .delete((req, res, next) => {
    res.end("Deleting all the promotions.");
  });

promoRouter
  .route("/:promoId")
  .get((req, res, next) => {
    res.end(
      "Will send the details of promotion with id '" +
        req.params.promoId +
        "' to you."
    );
  })
  .post((req, res, next) => {
    res.end("POST operation not supposed on /promotions/{id}");
  })
  .put((req, res, next) => {
    res.write("Updated the promotion with id: " + req.params.promoId + "\n");
    res.end("Updated promotion is " + JSON.stringify(req.body));
  })
  .delete((req, res, next) => {
    res.end("Deleted promotion with id: " + req.params.promoId);
  });

module.exports = promoRouter;
