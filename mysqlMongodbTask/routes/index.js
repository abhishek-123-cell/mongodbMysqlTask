const express = require("express");
const router = express.Router();
const employeeController = require("../controller/index");
// Retrieve all employees
router.get("/findAll", employeeController.findAll);
// Create a new employee
router.post("/create", employeeController.create);
// Retrieve a single employee with id
router.get("/:id", employeeController.findById);

module.exports = router;
