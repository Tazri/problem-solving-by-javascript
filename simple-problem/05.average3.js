/**
 * Read four numbers (N1, N2, N3, N4), which one with 1 digit after the decimal 
 * point, corresponding to 4 scores obtained by a student. Calculate the average 
 * with weights 2, 3, 4 e 1 respectively, for these 4 scores and print the message 
 * "Media: " (Average), followed by the calculated result. If the average was 7.0 
 * or more, print the message "Aluno aprovado." (Approved Student). If the 
 * average was less than 5.0, print the message: "Aluno reprovado." (Reproved Student). 
 * If the average was between 5.0 and 6.9, including these, the program must print 
 * the message "Aluno em exame." (In exam student).
 * 
 * In case of exam, read one more score. Print the message "Nota do exame: " 
 * (Exam score) followed by the typed score. Recalculate the average (sum the exam score 
 * with the previous calculated average and divide by 2) and print the message “
 * Aluno aprovado.” (Approved student) in case of average 5.0 or more) or 
 * "Aluno reprovado." (Reproved student) in case of average 4.9 or less. For these 
 * 2 cases (approved or reproved after the exam) print the message "Media final: " 
 * (Final average) followed by the final average for this student in the last line.
 * 
 * 
 * input
 * The input contains four floating point numbers that represent the students' grades.
 * 
 * output
 *  Print all the answers with one digit after the decimal point.
 */

var input = require('fs').readFileSync('./data/05.average3', 'utf8');
var lines = input.split('\n');

// split the numbers
let numbers = lines[0].split(' ');
let [a,b,c,d] = numbers;
let last = lines[1];


// parse the number
a = Number.parseFloat(a);
b = Number.parseFloat(b);
c = Number.parseFloat(c);
d = Number.parseFloat(d);
last = Number.parseFloat(last);

// create average
let average = ((a*2)+(b*3)+(c*4)+d)/10;
average = Math.round(average*10)/10;

// console.log average
console.log("Media: "+average);

// if average greater then 7.0 or equal
if(average >= 7.0){
    console.log("Aluno aprovado.");
}else if(average >= 5.0){
    // if average greater then or equal 5.0
    console.log("Aluno em exame.");
    console.log("Nota do exame: "+last);

    if(last + average / 2.0 > 5.0){
        console.log("Aluno aprovado.");
    }else{
        console.log("Aluno reprovado.");
    }
    console.log("Media final: "+(last+average)/2.0);
}else{
    console.log("Aluno reprovado.")
}