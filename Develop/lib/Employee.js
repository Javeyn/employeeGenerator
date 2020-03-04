const inquirer = require ("inquirer")


class Employee { 
    constructor(name, id, email){
    
        this.name = name;
        this.id = id;
        this.email = email;

    }

    getName(){
        return this.name;
    };

    getId(){
        return this.id;
    };
    
    getEmail(){
        return this.email;
    }

    getRole(){
        return "Employee";
    }

    Inquirer(){  
       return inquirer.prompt([
        {    
            type: 'input',
            name: 'name',
            message: "What is the employee's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee's ID?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the employee's email?",

        }
        ]).then(answers =>{
         
            this.name = answers.name;
            this.id = answers.id;
            this.email = answers.email;
        })    
    }


};

    module.exports = Employee;
