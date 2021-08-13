/**
 * problem : Read two nteger values (A and B). After, the program should print the 
 * message "Sao Multiplos" (are multiples) or "Nao sao Multiplos" (aren’t multiples), 
 * corresponding to the read values.
 * 
 * input : 
 * The input has two integer numbers.
 * 
 * output : 
 * Print the relative message to the input as stated above.
 * 
 */

var input = require('fs').readFileSync('./data/08.trianlge', 'utf8');
var lines = input.split('\n');

// extract the lines
let numbers = lines[0].split(' ');

// parse the number
let a = Number.parseFloat(numbers[0]);
let b = Number.parseFloat(numbers[1]);
let c = Number.parseFloat(numbers[2]);

// calculate it can be triangle ?
if(a + b > c && a + c > b && b + c > a){
    let perimeter = a + b + c;
    perimeter = Math.round(perimeter*10)/10;

    console.log("Perimetro = "+perimeter.toFixed(1));
}else{
    // calculate the trapizium area
    let area = ((a+b)/2)*c;
    area = Math.round(area*10)/10;

    console.log("Area = "+area.toFixed(1));
}