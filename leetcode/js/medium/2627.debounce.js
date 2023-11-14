/**
 * Problem No : 2627
 * Problem Name : Debounce
 * Judge : Leet Code
 * Date : 13 November 2023
 * 
 */

/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timeOutId;

    return function(...args) {
        if(timeOutId){
            clearTimeout(timeOutId);
        }
        timeOutId = setTimeout(()=>{
            fn(...args);
        },t);
    }
};


const log = debounce(console.log, 100);
log('Hello'); // cancelled
log('Hello'); // cancelled
log('Hello'); // Logged at t=100ms
 