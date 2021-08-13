/**
 *  Give a rectangular matrix of charecter, add a border of asterisks(*) to it.
 * 
 *  Example : 
 *  For ["abc","ded"]
 *  The output should be ["*****","*abc*","*ded*","*****"]
 * 
 *  input/output
 *  [time limit] 400ms (js)
 *  [input] array.string.picture
 * 
 */

let addBorder = picture =>{
    // create wall
    const stringLength = picture[0].length;
    const star = "*";
    const wall = star.repeat(stringLength + 2);

    // add start before and after string
    picture.forEach((string,index)=>{
        picture[index] = star.concat(string,star);
    })

    // add wall start and end of picture
    picture.unshift(wall);
    picture.push(wall);

    return picture;
}

// test the function
let array = ["abc","ded"];

console.log(addBorder(array));