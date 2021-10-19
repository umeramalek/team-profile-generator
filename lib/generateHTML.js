const fs = require("fs");


const manager = require('./manager');
const engineer = require('./engineer');
const intern = require('./intern'); 

function generateElements(element){
    let result = "";
    if(element.getRole() == "Engineer")
        result = `Github: <a style = "color: black;" href = "https://github.com/${element.getGithub()}" target = "_blank">${element.getGithub()}</a>`;
    else if(element.getRole() == "Manager")
        result = "Office Number: " + element.getOffice();
    else
        result = "School: " + element.getSchool();
    let str = `
    <li>
        <div class="card">
            <div>
                <div class="card card-body card-hover ">
                <h3 class="card-title">${element.name}, ${element.getRole()}</h3>
                <p>Email: <a style = "color: black;" href = "mailto:${element.email}">${element.email}</a></p>
                <p>ID: ${element.id}</p>
                <p>${result}</p>
            </div>
        </div>
    `
    return str;
}
function generateHTML(data){
    let str = "";
    data.forEach(element => {
        str+=generateElements(element);
    });
    
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        
        <title>My Team</title>
        
        <!-- Responsive navbar-->
        <nav class="navbar navbar-expand-lg navbar-dark bg-danger text-white ">
            <div class="container px-5 ">
                <a class="navbar-brand text-center">My Team</a>
            </div>
        </nav>
       
    
       <div class="row gx-4 gx-lg-5 ">
            <div class="col-md-4 mb-5">
                <div class="card h-100 border border-dark" style="padding:10%;">
                    <ul class="card-body">
                        ` + str + `
                    </ul>
    
                </div>
            </div>
        </div>
    
    </body>
    </html>
    `;
}
module.exports = {generateHTML};