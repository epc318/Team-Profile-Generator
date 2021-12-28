const { writeFile, copyFile } = require('./utils/generateHTML');
const generatePage = require('./src/page-template');
const inquirer = require('inquirer');
const Intern = require('./lib/Intern');
const Engineeer = require('./lib/Engineer');
const Manager = require('./lib/Manager');

const promptTeamManager = employeeData => {
     if(!employeeData.teamManager) {
         employeeData.teamManager = []
     };
     console.log(`
     =================
     Add a New Manager
     =================
   `);
     return inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is the team Managers name?',
          validate: nameInput => {
              if (nameInput) {
              return true;
              } else {
              console.log('Please enter the team Managers name!');
              return false;
              }
            }
        
        },
        {
            type: 'number',
            name: 'id',
            message: 'What is the team Managers ID #?',
            validate: nameInput => {
                if (nameInput) {
                return true;
                } else {
                console.log('Please enter the team Managers ID number!');
                return false;
                }
              },
          
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the team Managers email address?',
            validate: nameInput => {
                if (nameInput) {
                return true;
                } else {
                console.log('Please enter the team Managers full email address!');
                return false;
                }
              },
        },
        {
            type: 'number',
            name: 'officeNum',
            message: 'What is the team Managers Office Number?',
            validate: nameInput => {
                if (nameInput) {
                return true;
                } else {
                console.log('Please enter the team Managers Office Number!');
                return false;
                }
              },
        },
    ])
    .then(({ name, id, email, officeNumber, confirmAddTeamManager }) => {
        employeeData.teamManager.push(new Manager(name, id, email, officeNumber));
            if(confirmAddTeamManager) {
                return promptTeamManager(employeeData);
            }

            return employeeData;
    })
};
const promptEngineer = employeeData => {
    if(!employeeData.engineer) {
        employeeData.engineer = []
    };
    console.log(`
    ===============
    Add an Engineer
    ===============
  `);





  
}         