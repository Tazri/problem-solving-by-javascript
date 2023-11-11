/**
 * Problem Name : Create Hello World Function
 * Problem Link : https://leetcode.com/problems/create-hello-world-function/
 * 
 * 
 */

/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World";
    }
};

// testing

const f = createHelloWorld();
console.log(f()); // "Hello World"
