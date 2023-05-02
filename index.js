 const inquirer = require('inquirer');
 const mysql = require('mysql2')
 const fs = require('fs');
 const env = require('dotenv').config();
 const cTable = require('console.table');

const dbConfig = {
    host: "127.0.0.1",
    user: "root",
    password: 'Pepper586!@',
    database: "sqlDepartments"
};

 inquirer.prompt([
    {
        name: "views",
        message: "What would you like to do?",
        type: "list",
        choices: [
            "View All Departments",
            "Viea All Roles",
            "View All Employees",
            "Add Role",
            "View All Departments",
            "Add Department"
        ],
        
    },
    
   
 ]).then((answer) => {
  switch (answer.action) {
    case 'View all departments':
      connection.query('SELECT * FROM department', (err, results) => {
        if (err) throw err;
        console.table(results);
        connection.end();
      });
      break;
    case 'Add employee':
      // code for adding a new employee
      break;
    case 'Update employee role':
      // code for updating an employee's role
      break;
    case 'Exit':
      connection.end();
      break;
  }
})
.catch((err) => {
  console.log(err);
});