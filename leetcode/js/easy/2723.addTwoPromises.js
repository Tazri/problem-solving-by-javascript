/**
 * Problem No : 2723
 * Problem Name : Add Two Promises
 * Problem Link : https://leetcode.com/problems/add-two-promises/?envType=study-plan-v2&envId=30-days-of-javascript
 * Judge : Leet Code
 * Date : 14 November 2023
 * 
 */

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    let xOne = await promise1;
    let xTwo = await promise2;
    
    return Promise.resolve(xOne+xTwo);
};


addTwoPromises(Promise.resolve(2), Promise.resolve(2))
    .then(console.log); // 4
