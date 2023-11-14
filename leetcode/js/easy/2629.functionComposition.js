/**
 * Problem No : 2629
 * Problem Name : Function Composition
 * Problem Link : https://leetcode.com/problems/apply-transform-over-each-element-in-array/?envType=study-plan-v2&envId=30-days-of-javascript
 * Judge : Leet Code
 * Date : 14 November 2023
 * 
 */


/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
	return function(x) {
        let result = x;
        let len = functions.length;

        for(let i = len-1;i >= 0;i--){
            result = functions[i](result);
        }

        return result;
    }
};



const fn = compose([x => x + 1, x => 2 * x])
console.log(fn(4)) // 9