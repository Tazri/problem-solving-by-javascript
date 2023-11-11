/**
 * Give an array of integers, replace all occurrences of elementToReplace with subtracionElem.
 * 
 * example : 
 * For input array = [1,2,1], elementToReplace = 1 and subtractionElem  = 3, 
 * the output should be arrayReplace(inputArray,elementToReplace,substraction) = [3,2,3]
 * 
 * input/output
 * [time limit] 400ms (js)
 * [input] array.integer inputArray
 * 2 <= inputArray.length <= 10
 * 0 <= inpoutArray[i] <= 10
 * 0 <= elementToReplace <= 10
 * 0 <= subtractionElement <= 10 
 * output = array.integer
 * 
 */

function replaceArrayElement(inputArray,elementToReplace,substractoinElement){
    inputArray.forEach((element,elementIndex)=>{
        if(element === elementToReplace){
            inputArray[elementIndex] = substractoinElement;
        }
    })

    return inputArray;
}

// test the function
// create some array
let arrays = [
    {
        array : [1,2,1],
        elementToReplace : 1,
        substractoinElement : 3
    },
    {
        array : [2,3,5,3,4,7],
        elementToReplace : 3,
        substractoinElement : 5
    },
    {
        array : [3,2,3,4,7,5],
        elementToReplace : 7,
        substractoinElement : 9
    },
    {
        array : [3,2,5,6,7],
        elementToReplace : 2,
        substractoinElement : 5
    },
    {
        array : [5,4,7,8,9,5],
        elementToReplace : 5,
        substractoinElement : 0    
    },
    {
        array : [3,2,6,8,9,5],
        elementToReplace : 2,
        substractoinElement : 1
    }
]

arrays.forEach((objectWithArray)=>{
    // extract the object
    let {
        array,
        elementToReplace,
        substractoinElement
    } = objectWithArray;

    // before replace the array
    console.log(">>>>>>>>>>Start<<<<<<<<<<")
    console.log("Before replace the array = ");
    console.log(array);
    console.log("ElementToReplace = ",elementToReplace);
    console.log("SubstractionElement = ",substractoinElement);
    console.log();
    console.log("After replace the array = ");
    console.log(replaceArrayElement(array,elementToReplace,substractoinElement))
    console.log(">>>>>>>>>>End<<<<<<<<<<");
    console.log("\n\n");
})
