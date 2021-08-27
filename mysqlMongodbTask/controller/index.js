const db_connection = require("../config/index");

// INSERTING Employees
exports.insert = async (req, res, next) => {
  if (!req.body.name || !req.body.email) {
    return res.status(400).json({
      message: "Please fill in all the required fields.",
      fields: ["name", "email"],
    });
  }

  try {
    const [rows] = await db_connection.execute(
      "INSERT INTO `employees`(`name`,`email`) VALUES(?, ?)",
      [req.body.name, req.body.email]
    );

    if (rows.affectedRows === 1) {
      return res.status(201).json({
        message: "The employees has been successfully inserted.",
        userID: rows.insertId,
      });
    }
  } catch (err) {
    next(err);
  }
};

// FETCHING ALL USERS
exports.getAllEmployees = async (req, res, next) => {
  try {
    const [rows] = await db_connection.execute("SELECT * FROM `employees`");

    if (rows.length === 0) {
      return res.status(200).json({
        message:
          "There are no employees in the database, please insert some users.",
      });
    }

    res.status(200).json(rows);
  } catch (err) {
    next(err);
  }
};

// FETCHING SINGLE USER
exports.getEmployeesByID = async (req, res, next) => {
  try {
    const [row] = await db_connection.execute(
      "SELECT * FROM `employees` WHERE `id`=?",
      [req.params.id]
    );

    if (row.length === 0) {
      return res.status(404).json({
        message: "No employees Found!",
      });
    }

    res.status(200).json(row[0]);
  } catch (err) {
    next(err);
  }
};

// UPDATING USER
