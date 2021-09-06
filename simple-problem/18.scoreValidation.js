/**
 * Problem: 
 * Write an program to read two scores of a student. Calculate and print the semester average. The program must accept only valid scores (a score must fit in the range [0.10]). Each score must be validated separately.
 * 
 * The program must print a message "novo calculo (1-sim 2-nao)" that means "new calculate (1-yes 2-no)". After, the input will be (1 or 2). 1 means a new calculation, 2 means that the execution must be finished.
 * 
 * Input: 
 * The input file contains several positive or negative floating-point (double) values​. After the input of 2 valid scores, an integer number X will be read. Your program must stop when X = 2.
 * 
 * Output: 
 * If an invalid score is read, must be printed the message "nota invalida". When two valid scores are read, the message "media = " must be printed folowed by the average between these 2 scores. The message "novo calculo (1-sim 2-nao)" must be printed after reading X. This message should be displayed again if the standard input number for X is less than 1 or greater than 2, as example below.
 * 
 * The output average must be printed with 2 digits after the decimal point.
 * 
 */

var input = require('fs').readFileSync('./data/18.scoreValidation', 'utf8');
var lines = input.split('\n');


let i = 0;
let isCalculate = true;
let givenScore = 0;
let result = 0;

 while(1){
    let score =  Number.parseFloat(lines[i]);
    let isValidScore = score <= 10 && score >= 0;

    if(isValidScore && isCalculate){
        givenScore++;
        result += score;
    }else if(!isValidScore){
        console.log("nota invalida");
    }else if(!isCalculate && score === 1){
        console.log("novo calculo (1-sim 2-nao)");
        isCalculate = true;
    }else if(!isCalculate && score === 2 ){
        console.log("novo calculo (1-sim 2-nao)");
        break;
    }else if(!isCalculate){
        console.log("novo calculo (1-sim 2-nao)");
    }
    
    if(givenScore === 2){
        result /= 2;
        result = Math.round(result*100)/100;
        console.log("media = "+result.toFixed(2));
        result = 0;
        givenScore = 0;
        isCalculate = false;
    }

    i++;
 }