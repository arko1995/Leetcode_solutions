const maxLength = function (nums) {
  function GCD(a, b) {
    while (b > 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  function LCM(a, b) {
    return (a * b) / GCD(a, b);
  }

  let maxLen = 0;

  for (let i = 0; i < nums.length; i++) {
    let prod = 1;
    let gcd = 0;
    let lcm = 1;

    for (let j = i; j < nums.length; j++) {
      prod *= nums[j];
      gcd = GCD(gcd, nums[j]);
      lcm = LCM(lcm, nums[j]);

      if (prod === gcd * lcm) {
        maxLen = Math.max(maxLen, j - i + 1);
      }
    }
  }
  return maxLen;
};
maxLength([1, 2, 1, 2, 1, 1, 1]);
