/**
 * problem : 
 * Read an integer number that is the code number for phone dialing. 
 * Then, print the destination according to the following table:
 * {
 *  61 : "Brasilia",
 *  71 : "Salvador",
 *  11 : "Sao Paulo",
 *  21 : "Rio de Janeiro",
 *  32 : "Juiz de Fora",
 *  19 : "Campinas",
 *  27 : "Vitoria",
 *  31 : "Bela Horizonte"
 * }
 * If the input number isn’t found in the above table, the output must be:
 * DDD nao cadastrado
 * That means “DDD not found” in Portuguese language.
 * 
 * input ; 
 * The input consists in a unique integer number.
 * 
 * output : 
 * Print the city name corresponding to the input DDD. Print DDD nao 
 * cadastrado if doesn't exist corresponding DDD to the typed number.
 * 
 */

var input = require('fs').readFileSync('./data/15.DDD', 'utf8');
var lines = input.split('\n');

// extrat line
let number = lines[0];

// create phoneBook
let phoneBook = {
    61 : "Brasilia",
    71 : "Salvador",
    11 : "Sao Paulo",
    21 : "Rio de Janeiro",
    32 : "Juiz de Fora",
    19 : "Campinas",
    27 : "Vitoria",
    31 : "Bela Horizonte"
}

if(phoneBook[number]){
    console.log(phoneBook[number]);
}else{
    console.log("DDD nao cadastrado");
}