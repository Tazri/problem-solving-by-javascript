/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  const stack = [];
  let maxArea = 0;

  heights.push(0);
  for (let i = 0; i < heights.length; i++) {
    if (!stack.length) {
      stack.push([i, heights[i]]);
    } else if (lastHeight() <= heights[i]) {
      stack.push([i, heights[i]]);
    } else {
      let peak = null;

      // empting stack
      while (lastHeight() >= heights[i]) {
        peak = stack.pop();

        calculateArea(peak, i);

        if (!stack.length) break;
      }

      stack.push([peak[0], heights[i]]);
    }
  }

  function lastHeight() {
    return stack[stack.length - 1][1];
  }

  function calculateArea(p, i) {
    const area = (i - p[0]) * p[1];

    if (area > maxArea) {
      maxArea = area;
    }
  }

  heights.pop();
  return maxArea;
};

const histogram = [2, 1, 5, 6, 2, 3];
console.log(largestRectangleArea(histogram));
