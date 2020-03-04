const Employee = require("./Employee");
const inquirer = require ("inquirer")


class Intern extends Employee{
    constructor(name, id, email, school ) {
        super(name, id, email);
        this.school = school;
    }

    getRole(){
        return "Intern";
    }
    
    getHtml3(){
        return "School: "+ this.school;
    }

    getRoleIcon(){
        return "fas fa-book-reader";
    }

    getSchool(){
        return this.school;
    }

    async Inquirer(){   
        await super.Inquirer();
        return inquirer.prompt(
            {
                type: 'input',
                name: 'school',
                message: "What is the Intern's School?"
            }).then(answers =>{
                this.school = answers.school;
            });
    
    }
}
  
  module.exports = Intern;
