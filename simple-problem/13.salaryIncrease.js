/**
 * problem : 
 * The company ABC decided to give a salary increase to its employees, 
 * according to the following table:
 * 
 *  0 - 400.00 - 15%
 * 400.01 - 800.00 - 12%
 * 800.01 - 1200.00 - 10%
 * 1200.01 - 2000.00 - 7%
 * Above 2000.00 - 4%
 * 
 * input : 
 * Read the employee's salary, calculate and print the new employee's 
 * salary, as well the money earned and the increase percentual obtained 
 * by the employee, with corresponding messages in Portuguese, as the 
 * below example.
 * 
 * output : 
 * Print 3 messages followed by the corresponding numbers (see example) 
 * informing the new salary, the among of money earned and 
 * the percentual obtained by the employee. Note:
 * Novo salario:  means "New Salary"
 * Reajuste ganho: means "Money earned"
 * Em percentual: means "In percentage"
 * 
 */

var input = require('fs').readFileSync('./data/13.salaryIncrease', 'utf8');
var lines = input.split('\n');

// extract line
let numbers = lines[0];
let salary = Number.parseFloat(numbers);

function comition(salary,parcent){
    let c = (salary*parcent)/100;

    c = Math.round(c *100)/100;

    return String(c.toFixed(2));
}

function print(parcent){
    let c = comition(salary,parcent);
    salary += Number.parseFloat(c);
    salary = salary.toFixed(2);
    
    // print everything
    console.log("Novo salario: "+salary);
    console.log("Reajuste ganho: "+c);
    console.log("Em percentual: "+parcent+" %");
}

if(salary <= 400.00 && salary > 0){
    print(15);
}else if(salary <= 800.00){
    print(12);    
}else if(salary <= 1200.00){
    print(10);
}else if(salary <= 2000.00){
    print(7);
}else{
    print(4);
}