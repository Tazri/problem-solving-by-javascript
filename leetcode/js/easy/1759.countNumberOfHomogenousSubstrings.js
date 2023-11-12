/**
 * Problem Name : Count number of homogenous Substrings
 * Problem Link : https://leetcode.com/problems/count-number-of-homogenous-substrings/?envType=daily-question&envId=2023-11-09
 * 
 */

/**
 * @param {string} s
 * @return {number}
 */


class Counter{
    constructor(){
        this.total = 0;
    }

    add(num){
        this.total += num;
    }

    getTotal(){
        return this.total %= 1000000007;
        // return this.total;
    }
}

var countHomogenous = function(s) {
    let counter = new Counter();
    
    let prevCh = "";
    let currentLen = 0;

    for(let ch of s){
        if(prevCh == "" || prevCh != ch){
            counter.add(1);
            currentLen = 1;
            prevCh = ch;
            continue;
        }

        currentLen += 1;
        counter.add(currentLen);
    }

    return counter.getTotal();
};

console.log(countHomogenous("abbcccaa"));