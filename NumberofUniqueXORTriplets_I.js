const uniqueXorTriplets = function (nums) {
  const n = nums.length;

  if (n < 3) return n;

  let powerOfTwo = 1;

  while (powerOfTwo <= n) {
    powerOfTwo *= 2;
  }
  return powerOfTwo;
};

uniqueXorTriplets([1, 2]);
