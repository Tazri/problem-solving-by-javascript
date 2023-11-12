/**
 * Problem Name : Memooize
 * Problem Link : https://leetcode.com/problems/memoize/
 * 
 */


class Cache{
    constructor(){
        this.cache = {};
    }


    setValue(key,value){
        this.cache[key] = value;
        return this;
    }


    has(key){
        if(this.cache[key] == undefined){
            return false
        };
        return true;
    }


    makeKey(obj){
        return JSON.stringify(obj);
    }

    getValue(key){
        return this.cache[key];
    }
}


/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = new Cache();

    return function(...args) {
        const key = cache.makeKey(args);

        if(cache.has(key)){
            return cache.getValue(key);
        }

        const value = fn(...args);
        cache.setValue(key,value);
        return value;
    }
}



let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
});
console.log(memoizedFn(2, 3)) // 5
console.log(memoizedFn(2, 3)) // 5
console.log(callCount) // 1 
 