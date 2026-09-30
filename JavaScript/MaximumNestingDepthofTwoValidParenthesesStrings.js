const maxDepthAfterSplit = function (seq) {
  const result = [];

  let depth = 0;

  for (const c of seq) {
    if (c === "(") {
      depth++;

      if (depth % 2 === 0) {
        result.push(1);
      } else {
        result.push(0);
      }
    } else {
      if (depth % 2 === 0) {
        result.push(1);
      } else {
        result.push(0);
      }
      depth--;
    }
  }

  return result;
};

console.log(maxDepthAfterSplit("()(())()"));
