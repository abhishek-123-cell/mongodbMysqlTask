const express = require("express");
const router = express.Router();
const validators = require("../validator/index");
const EmployeesController = require("../controller/index");

// Inserting User
router.post(
  "/insertEmployees",
  validators.userInfo,
  validators.result,
  EmployeesController.insert
);

// Fetching all employess
router.get("/allEmployees", EmployeesController.getAllEmployees);

// Fetching Single User By ID
router.get(
  "/getEmployees/:id",
  validators.userID,
  validators.result,
  EmployeesController.getEmployeesByID
);
module.exports = router;
