const minChanges = function (s) {
  if (s.length % 2 !== 0) return 0;
  const m = s.length;

  let count = 0;

  for (let i = 0; i < m; i += 2) {
    if (s[i] !== s[i + 1]) {
      count++;
    }
  }

  return count;
};

console.log(minChanges("1001"));
