/**
 * problem : Write an algorithm that reads two floating values (x and y), 
 * which should represent the coordinates of a point in a plane. Next, determine 
 * which quadrant the point belongs, or if you are at one of the Cartesian axes or 
 * the origin (x = y = 0).
 * 
 * If the point is at the origin, write the message "Origem".
 * If the point is at X axis write "Eixo X", else if the point is at Y axis write 
 * "Eixo Y".
 * 
 * input :
 * The input contains the coordinates of a point.
 * output : 
 * The output should display the quadrant in which the point is.
 * 
 */

var input = require('fs').readFileSync('./data/06.cordinatesOfAPoints', 'utf8');
var lines = input.split('\n');

// extract line
let numbers = lines[0].split(' ');
let x = Number.parseFloat(numbers[0]);
let y = Number.parseFloat(numbers[1]);

if(x === 0 && y === 0){
    // if x and y both 0
    console.log("Origem");
}else if(x === 0){
    // if x === 0 
    console.log("Eixo Y");
}else if(y === 0){
    // if y === 0
    console.log("Eixo X");
}else if(x > 0 && y > 0){
    // if x and y both positive
    console.log("Q1");
}else if(x > 0 && y < 0){
    // if x positive and y negative
    console.log("Q4");
}else if(x < 0 && y > 0){
    // if x negative and y positive
    console.log("Q2");
}else{
    // if both are negative
    console.log("Q3");
}