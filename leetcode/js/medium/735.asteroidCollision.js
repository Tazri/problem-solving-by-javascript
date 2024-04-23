/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  const stack = [];

  for (const astroid of asteroids) {
    if (!stack.length) {
      stack.push(astroid);
    } else if (last() > 0 && astroid > 0) {
      stack.push(astroid);
    } else if (last() < 0) {
      stack.push(astroid);
    } else if (last() > 0 && astroid < 0) {
      while (last() > 0 && stack.length) {
        const right = stack.pop();

        if (right + astroid === 0) break;

        if (right + astroid < 0) {
          if (stack.length === 0) {
            stack.push(astroid);
            break;
          } else if (last() < 0) {
            stack.push(astroid);
            break;
          }
        } else {
          stack.push(right);
          break;
        }
      }
    }
  }

  function last() {
    return stack[stack.length - 1];
  }

  return stack;
};

const astroid = [8, -8];

console.log(asteroidCollision(astroid));
