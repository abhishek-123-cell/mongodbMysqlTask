// const express = require("express");
// const EmployeesExpressRoute = express.Router();

// // User schema
// let EmployeesSchema = require("../model/index");

// // Get all employees
// EmployeesExpressRoute.route("/findAll").get((req, res) => {
//   EmployeesSchema.find((error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.json(data);
//     }
//   });
// });

// // Create employees
// EmployeesExpressRoute.route("/createEmployees").post((req, res, next) => {
//   EmployeesSchema.create(req.body, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.json(data);
//     }
//   });
// });

// module.exports = EmployeesExpressRoute;
const express = require("express");
const session = require("express-session");
const router = express.Router();

const { check, validationResult } = require("express-validator");

router.post(
  "/createEmployees",
  [
    check("name").not().isEmpty().withMessage("Name is required"),
    check("email", "Email is required")
      .isEmail()

      .isLength({ min: 1 })
      .custom((val, { req, loc, path }) => {
        if (val !== req.body.confirm_password) {
          throw new Error("Passwords don't match");
        } else {
          return value;
        }
      }),
  ],
  (req, res) => {
    var errors = validationResult(req).array();
    if (errors) {
      req.session.errors = errors;
      req.session.success = false;
      res.redirect("/user");
    } else {
      req.session.success = true;
      res.redirect("/user");
    }
  }
);

router.get("/allEmployees", function (req, res) {
  res.render("Employees", {
    success: req.session.success,
    errors: req.session.errors,
  });
  req.session.errors = null;
});

module.exports = router;
