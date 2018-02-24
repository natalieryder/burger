var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
  burger.all(function(data) {
    console.log("burger_controller.js");
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req,res) {

	//req.body = {"name":"the burger name"}
	burger.insertOne(req.body.name, function(data) {
		console.log("burger_controller");
		console.log("post");
		// console.log(result.insertId);
		// res.json({ id: result.insertId });
		console.log(data.insertId);
		res.json({ id: data.insertId });
	});
});

router.put("/api/burgers/:id", function(req,res) {
	var id = req.params.id;
	burger.updateOne(req.body.devoured, id, function(data) {
		console.log("burger_controller put");

		res.json({id: data.insertId}) ;
	});
});


module.exports = router;