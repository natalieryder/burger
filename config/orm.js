var connection = require('./connection.js');

var orm = {
  selectAll: function(tableInput, callback) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) throw err;
      console.log("orm.js");
      console.log(result);
      callback(result);
    });
  },
  insertOne: function(tableInput,column,value, callback) {

    var queryString = "INSERT INTO " + tableInput;

    queryString += " (";
    queryString += column
    queryString += ") ";
    queryString += "VALUES (";
    queryString += "?";
    queryString += ") ";

    var query = connection.query(queryString, value, function(err, result) {
      if (err) throw err;
      callback(result);
    });
  },
  updateOne: function(tableInput, columnToUpdate, newValue, colToSearch, valOfCol, callback) {
    var queryString =
      "UPDATE ?? SET ?? = ? WHERE ?? = ?";

    var query = connection.query(
      queryString,
      [tableInput, columnToUpdate, newValue, colToSearch, valOfCol],
      function(err, result) {
        if (err) throw err;
        callback(result);
      }
    );
  }
};

module.exports = orm;
