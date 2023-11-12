/**
 * Problem No : 2677
 * Judge : Leet Code
 * Problem Name : Chunk Array
 * Problem Link : https://leetcode.com/problems/chunk-array/
 * 
 */

const TestingFunction = require("../test/TestingFunction");


/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const chunkedArray = [];
    const lastIndex = arr.length-1;

    let ai,ci;
    for(ai = 0;ai <= lastIndex;ai++){
        const chunk = [];
        for(ci = 0;ci < size && ai <= lastIndex;ci++){
            chunk.push(arr[ai]);
            ai++;
        }
        ai--;

        chunkedArray.push(chunk);
    }

    return chunkedArray;
};

const datas = [
    {
        case : "Test Case 1",
        input : [
            [1,9,6,3,2],
            3
        ],
        expected : [[1,9,6],[3,2]]
    },
    {
        case : "Test Case 2",
        input : [
            [1,2,3,4,5],
            1
        ],
        expected : [[1],[2],[3],[4],[5]]
    },
    {
        case : "Test Case 3",
        input : [
            [],
            1
        ],
        expected : []
    }
];


const test = new TestingFunction(datas);

test.on(chunk);

if(test.isErrorHappend){
    test.printError()
    test.printErrorStack();
}else{
    test.printTestStack();
    test.printTestSummary();
}
