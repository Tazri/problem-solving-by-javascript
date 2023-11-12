/**
 * Problem No : 2666
 * Judge : Leet Code
 * Problem Name : Allow One Function Call
 * Problem Link : https://leetcode.com/problems/allow-one-function-call/
 * 
 */

/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let itCalled = false;
	return function(...args){
        if(!itCalled){
            itCalled = true;
            return fn(...args);
        }
        return undefined;
    }
};


let fn = (a,b,c) => (a + b + c)
let onceFn = once(fn)
 
console.log(onceFn(1,2,3)); // 6
console.log(onceFn(2,3,6)); // returns undefined without calling fn

