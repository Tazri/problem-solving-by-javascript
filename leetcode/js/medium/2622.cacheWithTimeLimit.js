/**
 * Problem No : 2622
 * Problem Name : Cache With Time Limit
 * Problem Link : https://leetcode.com/problems/cache-with-time-limit/?envType=study-plan-v2&envId=30-days-of-javascript
 * Judge : Leet Code
 * Date : 15 November 2023
 * 
 */


var TimeLimitedCache = function() {
    this.totalProperty = 0;
    this.property = {
        /**
         * key : {
         *      value,
         *      timeOutId
         * }
         */
    }; 
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    let isValueExist = this.property.hasOwnProperty(key);

    if(isValueExist){
        clearTimeout(this.property[key].timeOutId);
    }

    // reset it again
    this.property[key] = {
        value,
        timeOutId : setTimeout(()=>{
            delete this.property[key];
            this.totalProperty--;
        },duration)
    }
    
    if(!isValueExist){
        this.totalProperty++;
    }

    return isValueExist;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    if(this.property.hasOwnProperty(key)){
        return this.property[key].value;
    }
    return -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return this.totalProperty;
};


const timeLimitedCache = new TimeLimitedCache()

console.log(timeLimitedCache.set(1,42,50)); // false

setTimeout(()=>{
    console.log(timeLimitedCache.set(1,50,100)); // true
},40);

setTimeout(()=>{
    console.log(timeLimitedCache.get(1)); // 50
},50);

setTimeout(()=>{
    console.log(timeLimitedCache.get(1)); // 50
},120);

setTimeout(()=>{
    console.log(timeLimitedCache.get(1)); // -1
},200);

setTimeout(()=>{
    console.log(timeLimitedCache.count()); // 0
},250);

