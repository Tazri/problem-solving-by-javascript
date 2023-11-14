/**
 * Problem No : 2635
 * Problem Name : Apply Transform Over Each Element In Array
 * Problem Link : https://leetcode.com/problems/apply-transform-over-each-element-in-array/?envType=study-plan-v2&envId=30-days-of-javascript
 * Judge : Leet Code
 * Date : 14 November 2023
 * 
 */

const TestingFunction = require("../test/TestingFunction");


/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const newArr = [];
    const len = arr.length;

    for(let i = 0;i < len;i++){
        newArr.push(fn(arr[i],i));
    }

    return newArr;
};

// testing data
let datas = [
    {
        case : "Test Case 1",
        input : [
            [1,2,3],
            function plusone(n){
                return n+1;
            }
        ],
        expected : [2,3,4]
    },
    {
        case : "Test Case 2",
        input : [
            [1,2,3],
            function plusI(n,i){
                return n+i;
            }
        ],
        expected : [1,3,5]
    },
    {
        case : "Test Case 3",
        input : [
            [10,20,30],
            function constant(){
                return 42;
            }
        ],
        expected : [42,42,42]
    },
]

const test = new TestingFunction(datas);

test.on(map);

if(test.isErrorHappend){
    test.printError()
    test.printErrorStack();
}else{
    test.printTestStack();
    test.printTestSummary();
}
