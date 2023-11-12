/**
 * Problem Name : Check One String Swap Can Make Strings Equal
 * Problem Link : https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/
 * 
 * 
 */

let color = require("colors");

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

var areAlmostEqual = function(s1, s2) {
    if(s1 == s2){
        return true;
    }
    let len = s1.length

    for(let i1 = 0;i1 < len-1;i1++){
        for(let i2 = i1+1;i2 < len;i2++){
            let swapedString = swaped(s1,i1,i2);

            if(swapedString == s2){
                return true;
            }
        }
    }

    return false;
};


/**
 * 
 * @param {string} str 
 * @param {number} i1 
 * @param {number} i2 
 */

function swaped(str,i1,i2){
    let len = str.length;
    if(i1 >= len || i2 >= len){
        return null;
    }

    if(i1 == i2 || str[i1] == str[i2]){
        return str;
    }

    if(i1 > i2){
        let temp = i1;
        i1 = i2;
        i2 = temp;
    }

    return str.substring(0,i1) + str[i2] 
           + str.substring(i1+1,i2)+str[i1]+str.substring(i2+1);
}


// testing
console.log("\n\nTesting Started ....\n");

let datas = [
    {
        case : "Test Case 1",
        input : ["bank","kanb"],
        expected : true
    },
    {
        case : "Test Case 2",
        input : ["attack","defend"],
        expected : false
    },
    {
        case : "Test Case 3",
        input : ["kelb","kelb"],
        expected : true
    },
]


function printWhite(text){
    console.log(color.white(text));
}


function getStatus(s){
    if(s){
        return color.green("PASSED");
    }

    return color.red("FAILED");
}

let totalPassed = 0;
let totalFailed = 0;
let totalCase = datas.length;

datas.forEach(data=>{
    let result = areAlmostEqual(data.input[0],data.input[1]);

    let status = getStatus(result == data.expected);

    if(result == data.expected){
        totalPassed++;
    }else{
        totalFailed++;
    }

    printWhite(`> Case : ${data.case}`);
    printWhite(`> Status : ${status}`);
    printWhite(`> Input : ${data.input}`);
    printWhite(`> Output : ${result}`);
    printWhite(`> Expected : ${data.expected}`);
    console.log(color.yellow("\n------------\n"));
})

printWhite(`> Total Case : ${totalCase}`);
console.log(`${color.white("> Total Passed : ")}${color.green(totalPassed)}`);
console.log(`${color.white("> Total Failed : ")}${color.red(totalFailed)}`);
