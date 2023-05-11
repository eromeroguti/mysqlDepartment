 const inquirer = require('inquirer');
 const mysql = require('mysql2')
 const fs = require('fs');
 const env = require('dotenv').config();
 const cTable = require('console.table');

const dbConfig = {
    host: "127.0.0.1",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "sql_departments"
};


const connection = mysql.createConnection(dbConfig);
function init() {
  inquirer.prompt([
    {
        name: "views",
        message: "What would you like to do?",
        type: "list",
        choices: [
            "View All Departments",
            "View All Roles",
            "View All Employees",
            "Add Role",
            "Add Employee",
            "Add Department",
            "Exit"
        ],
        
    },
    
   
 ]).then((answer) => {
  switch (answer.views) {
    case 'View All Departments':
      connection.query('SELECT * FROM department', (err, results) => {
        if (err) throw err;
        console.table(results);
        init();
      });
      break;
    case 'View All Roles':
      connection.query('SELECT * FROM role', (err, results) => {
        if (err) throw err;
        console.table(results);
        init();
      });
      break;
    case 'View All Employees':
      connection.query('SELECT * FROM employee', (err, results) => {
        if (err) throw err;
        console.table(results);
        init();
      });
      break;
      case 'Add Role':
        connection.query('SELECT * FROM role', (err, results) => {
          if (err) throw err;
          console.table(results);
          init();
        });
    case 'Exit':
      connection.end();
      break;
  }
})
.catch((err) => {
  console.log(err);
});
}

init();



 