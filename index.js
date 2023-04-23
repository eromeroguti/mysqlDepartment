 const inquirer = require('inquirer');
 const mysql = require('mysql2')
 const fs = require('fs');
 const cTable = require('console.table');

const dbConfig = {
    host: "127.0.0.1",
    user: "root",
    password: "Pepper586!@",
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
    
   
 ]).then(async (response) => {
  console.log(`Performing action: ${response.action}`);

  const connection = await mysql.createConnection(dbConfig);

  switch (response.action) {
    case "View All Departments":
      const [deptRows] = await connection.execute("SELECT * FROM departments");
      console.table(deptRows);
      break;

    case "View All Roles":
      const [roleRows] = await connection.execute("SELECT * FROM roles");
      console.table(roleRows);
      break;

    case "View All Employees":
      const [empRows] = await connection.execute("SELECT * FROM employees");
      console.table(empRows);
      break;

    case "Add Role":
      
      break;

    case "Add Department":
      
      break;

    default:
      console.log(`Invalid action: ${response.action}`);
      break;
  }

  await connection.end();
});