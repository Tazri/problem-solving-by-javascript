/**
 * Problem Name : CounterII
 * Problem Link : https://leetcode.com/problems/counter-ii/
 * 
 */

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

var createCounter = function(init) {
    let counter = {
        init,
        state : init
    };
    
    counter.increment = ()=>{
        counter.state++;
        return counter.state;
    }

    counter.decrement = ()=>{
        counter.state--;
        return counter.state;
    }

    counter.reset = ()=>{
        counter.state = counter.init;
        return counter.state;
    }
    return counter
};

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
 
