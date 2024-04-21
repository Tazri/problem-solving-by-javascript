/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  const histogram = [];
  const width = matrix[0].length;
  let maxArea = 0;

  for (let i = 0; i < width; i++) {
    histogram.push(0);
  }

  histogram.push(0);

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < width; c++) {
      if (matrix[r][c] === "0") {
        histogram[c] = 0;
      } else {
        histogram[c]++;
      }
    }

    const area = largestRectangleArea(histogram);

    if (area > maxArea) {
      maxArea = area;
    }
  }

  return maxArea;
};

/**
 * @param {number[]} heights
 * @return {number}
 */
function largestRectangleArea(heights) {
  const stack = [];
  let maxArea = 0;

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

  return maxArea;
}

const matrix = [["1"]];

console.log(maximalRectangle(matrix));
