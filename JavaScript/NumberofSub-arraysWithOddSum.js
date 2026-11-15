const numOfSubarrays = function (arr) {
  let even = 1;
  let odd = 0;
  let sum = 0;
  let count = 0;
  const MOD = 1000000007;
  for (const num of arr) {
    sum += num;

    if (sum % 2 === 0) {
      count += odd;
      even++;
    } else {
      count += even;
      odd++;
    }
  }

  return count % MOD;
};

console.log(numOfSubarrays([1, 2, 3, 4, 5, 6, 7]));
