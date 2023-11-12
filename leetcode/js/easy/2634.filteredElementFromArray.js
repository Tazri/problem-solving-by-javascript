/**
 * 
 * Judge : leetcode
 * Problem Name : Filter element from array.
 * Problem Link : https://leetcode.com/problems/filter-elements-from-array/
 * 
 */

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let len = arr.length;
    let filteredArr = [];
    for(let i = 0;i < len;i++){
        if(!!fn(arr[i],i)){
            filteredArr.push(arr[i]);
        }
    }

    return filteredArr;
};