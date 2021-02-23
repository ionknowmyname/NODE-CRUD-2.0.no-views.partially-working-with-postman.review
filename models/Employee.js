const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const employeeSchema = new Schema({
    name: {type: String},
    designation: {type: String},
    email: {type: String},
    phone: {type: String},
    age: {type: Number}
}, { timestamps: true });  // timestamps manage created & updated fields automatically instead of doing it manually



const Employee = mongoose.model("Staff", employeeSchema);  // creates a plural of this as collection name, so staffs
module.exports = Employee;