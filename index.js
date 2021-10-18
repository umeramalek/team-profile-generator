const fs = require("fs");
const inquirer = require("inquirer");



function writeData()
{
    let output = gen.generateHTML(arr);
    fs.writeFile('output.html', output, (err) =>
    err ? console.error(err) : console.log('Success!')
    );
}


function managerPrompt() {

return inquirer
  
.prompt([
    {
      type: 'input',
      message: 'Enter Managers name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'Enter Managers ID?',
      name: 'id',
    },
    {
        type: 'input',
        message: 'Enter Managers email address',
        name: 'email',
      },
      {
        type: 'input',
        message: 'Enter managers office number?',
        name: 'office',
      },
     
  ])
  .then((response) => {
    let newManager = newManager(response.name,response.id,response.email,response.office);
    arr.push(newManager);
    


  }
  );

}

function employeePrompt() {

  return inquirer
    
  .prompt([
      {
        type: 'list',
        message: 'Whats the employee role?',
        choices: ["Engineer", "Intern"],
        name: 'employeeRole]',
      },
      {
        type: 'input',
        message: 'Enter employee name?',
        name: 'name',
      },
      {
          type: 'input',
          message: 'Enter employee id?',
          name: 'id',
        },
        {
          type: 'input',
          message: 'Enter employee email?',
          name: 'email',
        },
       
    ])
    .then((response) => {
      let newManager = newManager(response.name,response.id,response.email,response.office);
      arr.push(newManager);
      
  
  
    }
    );
  
  }
  




// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
