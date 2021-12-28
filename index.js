const { writeFile, copyFile } = require('./utils/generateHTML');
const generatePage = require('./src/page-template');
const inquirer = require('inquirer');
const Intern = require('./lib/Intern');
const Engineeer = require('./lib/Engineer');
const Manager = require('./lib/Manager');

const promptManager = employeeData => {

    console.log(`
  ===========
  New Project
  ===========
  `);
     if(!employeeData.manager) {
         employeeData.manager = []
     }
     return inquirer.prompt([
        {