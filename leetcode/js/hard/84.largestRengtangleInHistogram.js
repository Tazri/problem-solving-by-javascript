/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  const stack = [];
  let maxArea = 0;
  heights.push(0);

  for (let i = 0; i < heights.length; i++) {
    // console.log(`i : ${i} || heights[${i}] : ${heights[i]}`);

    if (!stack.length) {
      stack.push(i);
    } else if (heights[last(stack)] < heights[i]) {
      stack.push(i);
    } else {
      // now empting the stack
      let peak = null;
      while (heights[last(stack)] >= heights[i]) {
        peak = stack.pop();

        // calculate area
        calculateArea(peak, i);

        if (!stack.length) break;
      }

      // now update the height
      heights[peak] = heights[i];
      stack.push(peak);
    }

    // console.log("stack : ");
    // console.log(stack);
    // console.log("heights : ");
    // console.log(heights);

    // console.log("-------------\n\n\n");
  }

  // empting stack

  function calculateArea(peak, i) {
    const area = (i - peak) * heights[peak];

    if (maxArea < area) {
      maxArea = area;
    }

    // console.log(`i : ${i}, peak : ${peak}`);
    // console.log(`area : ${area}, maxArea : ${area}`);
  }

  return maxArea;
};

function last(arr) {
  return arr[arr.length - 1];
}

// const histogram = [2, 1, 5, 6, 2, 3, 0, 2, 1, 5, 6, 2, 3];
// const histogram = [1, 2, 3, 4, 5, 6, 1];
// const histogram = [2, 4];
const histogram = [1, 2, 2];

console.log(largestRectangleArea(histogram));

// TODO
