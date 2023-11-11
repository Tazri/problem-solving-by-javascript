/**
 * problem : 
 * Read 3 double numbers (A, B and C) representing the sides of a 
 * triangle and arrange them in decreasing order, so that the side A is 
 * the biggest of the three sides. Next, determine the type of triangle that 
 * they can make, based on the following cases always writing an appropriate message:
 * 
 * output : 
 * if A ≥ B + C, write the message: NAO FORMA TRIANGULO
 * if A2 = B2 + C2, write the message: TRIANGULO RETANGULO
 * if A2 > B2 + C2, write the message: TRIANGULO OBTUSANGULO
 * if A2 < B2 + C2, write the message: TRIANGULO ACUTANGULO
 * if the three sides are the same size, write the message: TRIANGULO EQUILATERO
 * if only two sides are the same and the third one is different, write the message: TRIANGULO ISOSCELES
 * 
 * inpout : 
 * The input contains three double numbers, A (0 < A) , B (0 < B) and C (0 < C).
 */

var input = require('fs').readFileSync('./data/10.trangleType', 'utf8');
var lines = input.split('\n');

// extract the line
let numbers = lines[0].split(' ');

// extract the number
numbers[0] = Number.parseFloat(numbers[0]);
numbers[1] = Number.parseFloat(numbers[1]);
numbers[2] = Number.parseFloat(numbers[2]);

// sorting the numbers
for(let i = 0; i < 3; i++){
    for(let j = 0;j < 3; j++){
        if(numbers[i] > numbers[j]){
            let temp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = temp;
        }
    }
}

let a = numbers[0];
let b = numbers[1];
let c = numbers[2];

let aa = a*a;
let bb = b*b;
let cc = c*c;
let bbpcc = bb + cc;

// createType case
let typeCaseOne = a >= b + c;
let typeCaseTwo = aa  === bbpcc;
let typeCaseThree = aa > bbpcc;
let typeCaseFour = aa < bbpcc;
let typeCaseFive = a === b && b === c && a === c;
let typeCaseSix = (a === b && b !== c) || (b === c && c !== a) || (c === a && a !== b);

if(typeCaseOne){
    console.log("NAO FORMA TRIANGULO");
}else if(typeCaseTwo){
    console.log("TRIANGULO RETANGULO");
}else if(typeCaseThree){
    console.log("TRIANGULO OBTUSANGULO");
}else if(typeCaseFour){
    console.log("TRIANGULO ACUTANGULO");
}

if(typeCaseFive){
    console.log("TRIANGULO EQUILATERO");
}

if(typeCaseSix){
    console.log("TRIANGULO ISOSCELES");
}