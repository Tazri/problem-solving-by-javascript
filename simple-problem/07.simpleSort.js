/**
 * problem : Read three integers and sort them in ascending order. After, print 
 * these values in ascending order, a blank line and then the values in the sequence 
 * as they were reade
 * 
 * input : 
 * The input contains three integer numbers.
 * 
 * output : 
 * Present the output as requested above.
 * 
 */

var input = require('fs').readFileSync('./data/07.simpleSort', 'utf8');
var lines = input.split('\n');

// extract lines
let numbers = lines[0].split(' ');
let numbersTwo = [];
numbersTwo[0] = Number.parseInt(numbers[0]);
numbersTwo[1] = Number.parseInt(numbers[1]);
numbersTwo[2] = Number.parseInt(numbers[2]);

// sort and print ascending order and print
for(i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
        if(numbersTwo[i] < numbersTwo[j]){
            let temp = numbersTwo[i];
            numbersTwo[i] = numbersTwo[j];
            numbersTwo[j] = temp; 
        }
    }
}

// print numbers two
for(i = 0;i < 3; i++){
    console.log(numbersTwo[i]);
}

console.log();

// print ascending order
for(let i = 0; i < 3; i++){
    console.log(numbers[i]);
}
