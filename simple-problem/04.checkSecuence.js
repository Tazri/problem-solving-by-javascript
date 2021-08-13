/**
 *  Give a sequence of a integer to an array, determine whether 
 *  it is possible to obtain a strictly increasing sequence by removing not more
 *  than one element than one element from the array.
 * 
 *  Example : 
 *  one
 *  for sequence = [1,3,2,1,4] 
 *  output should be false
 * 
 *  two 
 * for sequence = [1,4,5,7]
 *  output should be true
 * 
 *  input/output
 *  [time limit] 400ms (js)
 *  [input] array.integer picture
 *  2 <= firstPerameter <=  105
 *  -100 <= sequence[i] <= 105
 *  [output] true/false
 * 
 */

let sequence = (numbers) => {
    // length
    const length = numbers.length;

    // check is sequence 
    for(let i = 0; i < length - 1; i++){
        let numberOne = numbers[i];
        let numberTwo = numbers[i+1]
        if(numberTwo < numberOne ){
            return false;
        }
    }

    return true;
}

// test the function
const arrayOne = [1,2,5,7,7,8];
const arrayTwo = [1,3,2,4,6,4];
const arrayThree = [4,5,6,7,8];

console.log(sequence(arrayOne)); // true
console.log(sequence(arrayTwo)); // false
console.log(sequence(arrayThree)); // true