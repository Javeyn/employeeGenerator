const inquirer = require ("inquirer")
const HtmlCreate = require("./Develop/lib/HtmlCreate");
const fs = require("fs");

let employeeType = {};
employeeType ["Engineer"] = require("./Develop/lib/Engineer");
employeeType ["Intern"] = require("./Develop/lib/Intern");
employeeType ['Manager'] = require("./Develop/lib/Manager");

const employees = [];

String.prototype.hashCode = function(){
	var hash = 0;
	if (this.length == 0) return hash;
	for (i = 0; i < this.length; i++) {
		char = this.charCodeAt(i);
		hash = ((hash<<5)-hash)+char;
		hash = hash & hash; // Convert to 32bit integer
	}
	return hash;
}





 function getNextCard(){
     
    return inquirer.prompt(
        {    
            type: 'list',
            name: 'Role',
            message: "What is the employee's Role?",
            choices: [
                "Manager", 
                "Engineer", 
                "Intern", 
                "Complete!"
              ]
        }    
    ).then(answer =>{
            
            if(answer.Role in employeeType){
                employee = new employeeType[ answer.Role ];
                employee.Inquirer().then( x => { 
                    employees.push(employee);
                    getNextCard();
                    //console.log(employees); 
                } );           
            } else {
            
                //builds HTML HERE
                HTML = HtmlCreate(employees);
                fs.writeFile("./output/Team.html", HTML,  (err) => {
                    if (err) throw err;
                });
                            
            }
            
        });
}

getNextCard();




