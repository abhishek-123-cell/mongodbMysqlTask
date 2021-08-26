const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let employeeSchema = new Schema(
  {
    created_at: { type: Date, required: true, default: Date.now },
    name: {
      type: String,
    },
    email: {
      type: String,
    },
  },

  {
    collection: "employees",
  }
);

module.exports = mongoose.model("EmployeeSchema", employeeSchema);
