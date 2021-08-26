const express = require("express");
const EmployeesExpressRoute = express.Router();

// User schema
let EmployeesSchema = require("../model/index");

// Get all employees
EmployeesExpressRoute.route("/findAll").get((req, res) => {
  EmployeesSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Create employees
EmployeesExpressRoute.route("/createEmployees").post((req, res, next) => {
  EmployeesSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

module.exports = EmployeesExpressRoute;
