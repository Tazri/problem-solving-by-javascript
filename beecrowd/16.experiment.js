/**
 * Maria has just started as graduate student in a medical school 
 * and she's needing your help to organize a laboratory experiment 
 * which she is responsible about. She wants to know, at the end of 
 * the year, how many animals were used in this laboratory and 
 * the percentage of each type of animal is used at all.
 * 
 * This laboratory uses in particular three types of 
 * animals: frogs, rats and rabbits. To obtain this information, 
 * it knows exactly the number of experiments that were performed, 
 * the type and quantity of each animal is used in each experiment.
 * 
 * Input
 * The first line of input contains an integer N indicating the 
 * number of test cases that follows. Each test case contains an 
 * integer Amount (1 ≤ Amount ≤ 15) which represents the amount of 
 * animal used and a character Type ('C', 'R' or 'S'), indicating 
 * the type of animal:
 * - C: Coelho (rabbit in portuguese)
 * - R: Rato (rat  in portuguese)
 * - S: Sapo (frog in portuguese)
 * 
 * Output
 * Print the total of animals used, the 
 * total of each type of animal and the percentual of each one 
 * in relation of the total of animals used. The percentual must be 
 * printed with 2 digits after the decimal point.
 * 
 */

 var input = require('fs').readFileSync('./data/16.experiment', 'utf8');
 var lines = input.split('\n');
 
 let n = Number.parseInt(lines[0]);
 let total = 0;
 let typeC = 0;
 let typeR = 0;
 let typeS = 0;
 
 for(let i = 1; i <= n;i++){
     // get information
     let line = lines[i].split(' ');
     let number = Number.parseInt(line[0]);
     let type = line[1];
     
     total += number;
 
     if(type === "C"){
         typeC += number;
     }else if(type === "R"){
         typeR += number;
     }else if(type === "S"){
         typeS += number;
     }
 }
 
 let parcentC = (100*typeC)/total;
 let parcentR = (100*typeR)/total;
 let parcentS = (100*typeS)/total;
 
 parcentC = Math.round(parcentC*100)/100;
 parcentR = Math.round(parcentR*100)/100;
 parcentS = Math.round(parcentS*100)/100;
 
 console.log("Total: "+total+" cobaias");
 console.log("Total de coelhos: "+typeC);
 console.log("Total de ratos: "+typeR);
 console.log("Total de sapos: "+typeS);
 console.log("Percentual de coelhos: "+parcentC.toFixed(2)+" %");
 console.log("Percentual de ratos: "+parcentR.toFixed(2)+" %");
 console.log("Percentual de sapos: "+parcentS.toFixed(2)+" %");