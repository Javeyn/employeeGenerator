const Employee = require("./Employee");
const inquirer = require ("inquirer")

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber(){
        return this.officeNumber;
    }

    getRoleIcon(){
        return "fas fa-coffee";
    }

    getHtml3(){
        return "Office Number: "+ this.officeNumber;
    }

    getRole(){
        return "Manager";
    }

    async Inquirer(){   
        await super.Inquirer();
        return inquirer.prompt(
            {
                type: 'input',
                name: 'officeNumber',
                message: "What is the Manager's Office Number?"
            }).then(answers =>{
                
                this.officeNumber = answers.officeNumber;
            });
    
    }


}


module.exports = Manager;

