/**
 * Problem No : 2637
 * Problem Name : Promise Time Limit
 * Judge : Leet Code
 * Problem Link : https://leetcode.com/problems/promise-time-limit/?envType=study-plan-v2&envId=30-days-of-javascript
 * Date : 15 November 2023
 * 
 */

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    
	return async function(...args) {
        return new Promise((resolve,reject)=>{
            let timeId = setTimeout(()=>{
                reject("Time Limit Exceeded");
            },t);
            
            fn(...args)
                .then(resolve)
                .catch(reject)
                .finally(()=> clearTimeout(timeId));
        });
    }
};


const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms

