/**
 * Problem No : 2703
 * Problem Name : Return Length of Argument Passed
 * Judge : Leet Code
 * Problem Link : https://leetcode.com/problems/return-length-of-arguments-passed/
 * 
 */


const TestingFunction = require("../test/TestingFunction");

/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
	return arguments.length;
};


let datas = [
    {
        case : "Test Case 1",
        input : [5],
        expected : 1
    },
    {
        case : "Test Case 2",
        input : [{}, null, "3"],
        expected : 3
    },
    {
        case : "Test Case 3",
        input : [1,2,3],
        expected : 3
    },
];


const test = new TestingFunction(datas);

test.on(argumentsLength);

if(test.isErrorHappend){
    test.printError()
    test.printErrorStack();
}else{
    test.printTestStack();
    test.printTestSummary();
}