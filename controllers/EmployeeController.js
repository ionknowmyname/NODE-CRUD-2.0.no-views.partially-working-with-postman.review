const Employee = require("../models/Employee");     // storing the employee schema for mongoose in this variable


// show list of employees
const index = (req, res, next) => {
    /////////////   the below is a promise, don't interrupt with ;  //////////////
    Employee.find()
    .then(response => {
        res.json({ response });
    })
    .catch(error => { 
        res.json({ message: 'An error occured' })
    });
    /////////////////////////////////////////////////////////////////////////////
}

// show single employee
const show = (req, res, next) => {
    let employeeID = req.body.EmployeeID;
    Employee.findById(employeeID)
    .then(response => {
        res.json({ response });
    })
    .catch(error => { 
        res.json({ message: 'An error occured' }) 
    });    
}

// add new employee
const store = (req, res, next) => {
    let employee = new Employee({
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    })
    employee.save()
    .then(response => {
        res.json({ message: 'Employee added successfully!' });
    })
    .catch(error => { 
        res.json({ message: 'An error occured' }) 
    });   
}

// update an employee
const update = (req, res, next) => {
    let employeeID = req.body.employeeID;

    let updatedData = {
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age  
    }

    Employee.findByIdAndUpdate(employeeID, { $set: updatedData })
    .then(() => {
        res.json({ message: 'Employee updated successfully!' });
    })
    .catch(error => { 
        res.json({ message: 'An error occured' }) 
    });  
}

// delete an employee
const destroy = (req, res, next) => {
    let employeeID = req.body.employeeID;
    Employee.findByIdAndRemove(employeeID)
    .then(() => {
        res.json({ message: 'Employee deleted successfully!' });
    })
    .catch(error => { 
        res.json({ message: 'An error occured' }) 
    });  
}


module.exports = {
    index, show, store, update, destroy
}