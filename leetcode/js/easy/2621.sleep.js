/**
 * Problem Link : https://leetcode.com/problems/sleep/
 * Date : 10 Nov 2023
 * 
 */


async function sleep(millis) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
        },millis);
    })    
}

let t = Date.now()
sleep(100).then(() => console.log(Date.now() - t)) // 100
