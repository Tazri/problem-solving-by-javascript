/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const stack = [];

  for (let i = 0; i < path.length; i++) {
    const ch = path[i];

    if (ch === "/") continue;

    // go forward
    let dir = "";
    while (i < path.length && path[i] !== "/") {
      dir += path[i];
      i++;
    }

    if (dir === ".") continue;
    else if (dir === "..") {
      stack.length && stack.pop();
    } else stack.push(dir);
  }

  return "/" + stack.join("/");
};

const pathOne = "/home";

console.log(simplifyPath(pathOne));
