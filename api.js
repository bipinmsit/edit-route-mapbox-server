var getDataFromProcedure = require("./server");
var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var config = require("./dbconfig");

var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", router);

router.use((request, response, next) => {
  console.log("middleware");
  next();
});

router.route("/get/fromTo").get((request, response) => {
  getDataFromProcedure(config, "nav.uspGetRouteDataForEditRoute").then(
    (data) => {
      response.json(data);
    }
  );
});

var port = process.env.PORT || 8090;
app.listen(port);
console.log("Order API is runnning at " + port);
