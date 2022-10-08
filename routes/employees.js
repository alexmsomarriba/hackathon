const express = require('express')
const usersController = require('../controllers/employees')
const router = express.Router()

// routes
router.get('/', usersController.getEmployees);
 
router.get('/:id', usersController.getEmployeesById);

router.get('/firstName/:first_name', usersController.getEmployeesByFirstName);

router.get('/employeesSalary/:first_name', usersController.getEmployeesSalary);

router.get('/employeesDept/:first_name', usersController.getEmployeesDept);

router.get('/employeesTitle/:first_name', usersController.getEmployeesTitle);

module.exports = router;