/**
 * problem : 
 * Read two nteger values (A and B). After, the program should print the message 
 * "Sao Multiplos" (are multiples) or "Nao sao Multiplos" (aren’t multiples), 
 * corresponding to the read values.
 * 
 * input : 
 * The input has two integer numbers
 * 
 * output : 
 * Print the relative message to the input as stated above
 * 
 */
var input = require('fs').readFileSync('./data/09.multiples', 'utf8');
var lines = input.split('\n');

// extract the line
let number = lines[0].split(' ');

// extract the number
let a = Number.parseInt(number[0]);
let b = Number.parseInt(number[1]);

// biggest and smallest
if(a > b){
    let temp = a;
    a = b;
    b = temp;
}

// check they are multiples
if( b % a){
    console.log("Nao sao Multiplos");
}else{
    console.log("Sao Multiplos");
}