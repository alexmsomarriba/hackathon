const express = require('express');
const bodyParser = require("body-parser");
const usersRouter = require('./routes/employees');
const app = express();

// Port used, comment from computer 2
const port = process.env.PORT || 4001;
app.use(bodyParser.json())

app.use('/employees', usersRouter)
app.use('/employees/firstName', usersRouter)
app.use('/employeesSalary/firstName', usersRouter)
app.use('/employeesDept/firstName', usersRouter)
app.use('/employeesTitle/firstName', usersRouter)

app.get('/', (req, res) => {
    res.send('Welcome to our API!')
  })
  
  app.listen(port, () => {
   console.log(`Web server is listening on port ${port}!`);
  });
  