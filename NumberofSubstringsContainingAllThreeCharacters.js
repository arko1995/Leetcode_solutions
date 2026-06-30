const numberOfSubstrings = function (s) {
  let output = 0;
  let left = 0;

  let count = {
    a: 0,
    b: 0,
    c: 0,
  };

  for (let right = 0; right < s.length; right++) {
    count[s[right]]++;

    while (count.a > 0 && count.b > 0 && count.c > 0) {
      output += s.length - right;
      count[s[left]]--;
      left++;
    }
  }

  return output;
};

numberOfSubstrings("abcabc");
