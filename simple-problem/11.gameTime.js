/**
 * problem : 
 * Read the start time and end time of a game, in hours. Then 
 * calculate the duration of the game, knowing that the game can 
 * begin in a day and finish in another day, with a maximum duration 
 * of 24 hours. The message must be printed in portuguese 
 * “O JOGO DUROU X HORA(S)” that means “THE GAME LASTED X HOUR(S)”
 * 
 * input : 
 * Two integer numbers representing the start and end time of a game.
 * 
 * output : 
 * Print the duration of the game as in the sample output.
 * 
 */

var input = require('fs').readFileSync('./data/11.gameTime', 'utf8');
var lines = input.split('\n');

// extract the line
let numbers = lines[0].split(' ');

// extract the numbers
let start = Number.parseInt(numbers[0]);
let end = Number.parseInt(numbers[1]);

let time = 0;

// calculate time
if( start < end){
    time = end - start;
}else if(start > end){
    time = (24 - start) + end;
}else{
    time = 24;
}

console.log("O JOGO DUROU "+time+ " HORA(S)");