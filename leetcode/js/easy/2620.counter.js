/**
 * 
 * Problem Link : https://leetcode.com/problems/counter/
 * Date : 10 nov 2023
 * 
 */

var createCounter = function(n) {
    let gen = function*(){
        for(let i = n;i >= n;i++){
            yield i;
        }
    }

    let it = gen();
    return function() {
        return it.next().value;
    };
};

const counter = createCounter(10)

console.log(counter()) // 10
console.log(counter()) // 11
console.log(counter()) // 12
