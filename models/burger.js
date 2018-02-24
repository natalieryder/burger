var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
    	console.log("burger.js")
    	console.log(res);
    	
      	cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(val, cb) {
    orm.insertOne("burgers", 'burger_name', val, cb);
  },
  updateOne: function(newValue, valOfCol, cb) {
    orm.updateOne("burgers", "devoured", newValue, "id", valOfCol, cb);
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
