/**
 * Problem No : 2715
 * Problem Name : Time Out Cancellation
 * Problem Link : https://leetcode.com/problems/timeout-cancellation/?envType=study-plan-v2&envId=30-days-of-javascript
 * Judge : Leet Code
 * Date : 14 November 2023
 * 
 */

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    let setTimeOutId = setTimeout(()=>{
        fn(...args);
    },t);

    return function(){
        return clearTimeout(setTimeOutId);
    }
};


const result = []

const fn = (x) => x * 5
const args = [2], t = 20, cancelT = 50

const start = performance.now() 

const log = (...argsArr) => {
    const diff = Math.floor(performance.now() - start);
    result.push({"time": diff, "returned": fn(...argsArr)})
}

const cancel = cancellable(log, args, t);

const maxT = Math.max(t, cancelT)
          
setTimeout(() => {
    cancel()
}, cancelT)

setTimeout(() => {
    console.log(result) // [{"time":20,"returned":10}]
}, maxT + 15)
