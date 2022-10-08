const mysql = require('mysql')
const pool = require('../mysql/connection')
const { handleSQLError } = require('../mysql/error')

const getEmployees = (req, res) => {
  // SELECT ALL USERS
    
   let sql="SELECT * FROM employees LIMIT 50";
    
  pool.query(sql, (err, rows) => {
   if (err) return handleSQLError(res, err)
    return res.json(rows);
  })  
}

const getEmployeesById = (req, res) => {
  // SELECT USERS WHERE ID = <REQ PARAMS ID>
  let idValue=req.params.id;

  let sql = `SELECT * FROM employees where emp_no=? LIMIT 1`;
  // WHAT GOES IN THE BRACKETS
  sql = mysql.format(sql, [idValue]);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}


const getEmployeesByFirstName = (req, res) => {
  
  let firstName=req.params.first_name;
 
  let sql = `SELECT * FROM employees where first_name=? LIMIT 5`;

  // WHAT GOES IN THE BRACKETS
  sql = mysql.format(sql, [firstName])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const getEmployeesSalary = (req, res) => {
  
  let firstName=req.params.first_name;

  let sql = `SELECT first_name,last_name, salary FROM employees JOIN salaries on employees.emp_no= salaries.emp_no where first_name=? LIMIT 1`;

  // WHAT GOES IN THE BRACKETS
  sql = mysql.format(sql, [firstName])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}


const getEmployeesDept = (req, res) => {
  
  let firstName=req.params.first_name;

  let sql = `SELECT first_name,last_name, dept_no FROM employees JOIN dept_emp on employees.emp_no=dept_emp.emp_no where first_name=? LIMIT 1`;

  // WHAT GOES IN THE BRACKETS
  sql = mysql.format(sql, [firstName])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}


const getEmployeesTitle = (req, res) => {
  
  let firstName=req.params.first_name;

  let sql = `SELECT first_name,last_name, title FROM employees JOIN titles on employees.emp_no=titles.emp_no where first_name=? LIMIT 1`;

  // WHAT GOES IN THE BRACKETS
  sql = mysql.format(sql, [firstName])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}



module.exports = { 
    getEmployees,
    getEmployeesById,
    getEmployeesByFirstName,
    getEmployeesSalary,
    getEmployeesDept,
    getEmployeesTitle 
    }