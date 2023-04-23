DROP DATABASE IF EXISTS sqlDepartments;
CREATE DATABASE sqlDepartments;

USE sqlDepartments;

CREATE TABLE department (
    id INT NOT NULL PRIMARY KEY,
    name VARCHAR(30)
);

CREATE TABLE role (
    id INT NOT NULL PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT NOT NULL
);

CREATE TABLE employee (
    id INT NOT NULL PRIMARY KEY,
    firstName VARCHAR(30),
    lastName VARCHAR(30),
    role_id INT NOT NULL,
    manager_id INT,
    FOREIGN KEY (manager_id) REFERENCES employee(id)
);