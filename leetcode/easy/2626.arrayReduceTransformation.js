/**
 * Problem Name : Array Reduce Transformation
 * Problem Link : https://leetcode.com/problems/array-reduce-transformation/
 * 
 * 
 */

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let state = init;

    for(let num of nums){
        state = fn(state,num);
    }

    return state;
};


// testing
function sum(accum, curr) { 
    return accum + curr; 
}

let nums = [1,2,3,4];

let init = 0;

console.log(reduce(nums,sum,init)); // expected 10