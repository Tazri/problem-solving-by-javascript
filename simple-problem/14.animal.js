/**
 * problem : 
 * In this problem, your job is to read three Portuguese words. These 
 * words define an animal according to the table below, from left to right. 
 * After, print the chosen animal defined by these three words.
 * 
 * {
 *   vertebrado : {
 *      ave : {
 *          carnivoro : "aguia",
 *          onivoro : "pomba"
 *      },
 *      mamifero : {
 *          onivoro : "homem",
 *          herbivoro : "vaca"
 *       }
 *  },
 *  invertebrado : {
 *      inseto : {
 *         hematofago : "pulga",
 *         herbivoro : "lagarta"
 *      },
 *      anelideo : {
 *          hematofago : "sanguessuga",
 *          onivoro : "minhoca"
 *      }
 *  }
 * }
 * 
 * inpout : 
 * The input contains 3 words, one by line, that will be used 
 * to identify the animal, according to the above table, with all letters 
 * in lowercase.
 * 
 * output : 
 * Print the animal name according to the given input.
 */

var input = require('fs').readFileSync('./data/14.animal', 'utf8');
var lines = input.split('\n');

// extrat the line
let a = lines[0];
let b = lines[1];
let c = lines[2];

// create animal table
const animalTable = {
    vertebrado : {
        ave : {
            carnivoro : "aguia",
            onivoro : "pomba"
        },
        mamifero : {
            onivoro : "homem",
            herbivoro : "vaca"
        }
    },
    invertebrado : {
        inseto : {
            hematofago : "pulga",
            herbivoro : "lagarta"
        },
        anelideo : {
            hematofago : "sanguessuga",
            onivoro : "minhoca"
        }
    }
}

// printName
console.log(animalTable[a][b][c]);