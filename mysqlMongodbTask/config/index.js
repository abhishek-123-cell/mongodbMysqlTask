const mysql = require("mysql");
//local mysql db connection
const db_connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "customer_order1",
});
db_connection.connect(function (err) {
  if (err) throw err;
  console.log("Database Connected!");
});
module.exports = db_connection;
