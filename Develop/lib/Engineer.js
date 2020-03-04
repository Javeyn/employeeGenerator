const Employee = require("./Employee");
const inquirer = require ("inquirer")


class Engineer extends Employee{
    constructor(name, id, email, github ) {
        super(name, id, email);
        this.github = github;
    }

    getRole(){
        return "Engineer";
    }

    getRoleIcon(){
        return "fas fa-glasses";
    }
    
    getHtml3(){
        return "Github: <a href='https://github.com/"+this.github+"'>"+this.github+"</a>";
    }

    getGithub(){
        return this.github;
    }

    async Inquirer(){   
        await super.Inquirer();
        return inquirer.prompt(
            {
                type: 'input',
                name: 'github',
                message: "What is the Engineers GitHub Username?"
            }).then(answers =>{
                
                this.github = answers.github;
            });
    
    }

  }
  
  module.exports = Engineer;
