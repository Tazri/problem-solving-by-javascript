/**
 * problem : 
 * Read the start time and end time of a game, in hours and minutes 
 * (initial hour, initial minute, final hour, final minute). Then print 
 * the duration of the game, knowing that the game can begin in a day 
 * and finish in another day,
 * Obs.: With a maximum game time of 24 hours and the minimum game time of 1 minute.
 * 
 * input : 
 * Four integer numbers representing the start and end time of the game.
 * 
 * output : 
 * Print the duration of the game in hours and minutes, in this format: 
 * “O JOGO DUROU XXX HORA(S) E YYY MINUTO(S)” . 
 * Which means: the game lasted XXX hour(s) and YYY minutes.
 * 
 */

var input = require('fs').readFileSync('./data/12.gameTimeWithMinute', 'utf8');
var lines = input.split('\n');

// extract lines
let numbers = lines[0].split(' ');

// extract numbers
let startH = Number.parseInt(numbers[0]);
let startM = Number.parseInt(numbers[1]);
let endH = Number.parseInt(numbers[2]);
let endM = Number.parseInt(numbers[3]);

// startTime
let startTime = startH*60 + startM;
let endTime = endH*60 + endM;
let gameTime = 0;

if(startTime < endTime){
    gameTime = endTime - startTime;
}else if(startTime > endTime){
    gameTime = (1440 - startTime) + endTime;
}else{
    gameTime = 1440;
}

let gameTimeH = Number.parseInt(gameTime/60);
let gameTimeM = gameTime%60;

console.log("O JOGO DUROU "+gameTimeH+" HORA(S) E "+gameTimeM+" MINUTO(S)");