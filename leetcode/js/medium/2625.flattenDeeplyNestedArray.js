const TestingFunction = require("../test/TestingFunction");

/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    if(n <= 0){
        return arr;
    }

    const newArr = [];

    for(let item of arr){
        if(!Array.isArray(item)){
            newArr.push(item);
            continue;
        }

        // started to flating
        newArr.push(...flat(item,n-1));
    }

    return newArr;
};


// test start

// testing data
let datas = [
    {
        case : "Test Case 1",
        input : [
            [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]],
            0
        ],
        expected : [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
    },
    {
        case : "Test Case 2",
        input : [
            [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]],
            1
        ],
        expected : [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]
    },
    {
        case : "Test Case 3",
        input : [
            [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]],
            2
        ],
        expected : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    },
]

const test = new TestingFunction(datas);

test.on(flat);

if(test.isErrorHappend){
    test.printError()
    test.printErrorStack();
}else{
    test.printTestStack();
    test.printTestSummary();
}
