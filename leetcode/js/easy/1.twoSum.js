/**
 * Problem Name : Two Sum
 * Problem Link : https://leetcode.com/problems/two-sum/
 * 
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    let len = nums.length;

    for(let left = 0;left < len - 1;left++){
        for(let right = left + 1;right < len;right++){
            if(nums[left] + nums[right] == target){
                return [left,right];
            }
        }
    }
};

console.log(twoSum([3,2,4],6));