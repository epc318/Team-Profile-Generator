const { writeFile, copyFile } = require('./utils/generateHTML');
const generatePage = require('./src/page-template');
const inquirer = require('inquirer');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
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
        return inquirer.prompt([
            {
            type: 'input',
            name: 'name',
            message: 'What is the Engineers name?',
            validate: nameInput => {
                if (nameInput) {
                return true;
                } else {
                console.log('Please enter the Engineers name!');
                return false;
                }
                }
            
            },
            {
                type: 'number',
                name: 'id',
                message: 'What is the team Engineers ID #?',
                validate: nameInput => {
                    if (nameInput) {
                    return true;
                    } else {
                    console.log('Please enter the Engineers ID number!');
                    return false;
                    }
                },
            
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the Engineers email address?',
                validate: nameInput => {
                    if (nameInput) {
                    return true;
                    } else {
                    console.log('Please enter the Engineers full email address!');
                    return false;
                    }
                },
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is the team Engineers Github Username?',
                validate: nameInput => {
                    if (nameInput) {
                    return true;
                    } else {
                    console.log('Please enter the Engineers Github Username!');
                    return false;
                    }
                },
            },
        ])
        .then(({ name, id, email, github, confirmAddEngineer }) => {
            employeeData.engineer.push(new Engineer(name, id, email, github));
                if(confirmAddEngineer) {
                    return promptEngineer(employeeData);
                }
    
                return employeeData;
        })
};
const promptIntern = employeeData => {
    if(!employeeData.intern) {
        employeeData.intern = []
    };
    console.log(`
===============
Add an Intern
===============
    `);
        return inquirer.prompt([
            {
            type: 'input',
            name: 'name',
            message: 'What is the Interns name?',
            validate: nameInput => {
                if (nameInput) {
                return true;
                } else {
                console.log('Please enter the Interns name!');
                return false;
                }
                }
            
            },
            {
                type: 'number',
                name: 'id',
                message: 'What is the team Interns ID #?',
                validate: nameInput => {
                    if (nameInput) {
                    return true;
                    } else {
                    console.log('Please enter the Interns ID number!');
                    return false;
                    }
                },
            
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the Interns email address?',
                validate: nameInput => {
                    if (nameInput) {
                    return true;
                    } else {
                    console.log('Please enter the Interns full email address!');
                    return false;
                    }
                },
            },
            {
                type: 'input',
                name: 'school',
                message: 'What is the Interns most recent or current school?',
                validate: nameInput => {
                    if (nameInput) {
                    return true;
                    } else {
                    console.log('Please enter the Interns most recent or current school!');
                    return false;
                    }
                },
            },
        ])
        .then(({ name, id, email, school, confirmAddIntern }) => {
            employeeData.intern.push(new Intern(name, id, email, school));
                if(confirmAddIntern) {
                    return promptIntern(employeeData);
                }
    
                return employeeData;
        })
};

promptManager({})
.then(promptEngineer)
.then(promptIntern)