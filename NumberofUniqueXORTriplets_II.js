const uniqueXorTriplets = function (nums) {
  const LIMIT = 2048;

  const values = [...new Set(nums)];

  const pairXor = new Uint8Array(LIMIT);

  for (const a of values) {
    for (const b of values) {
      pairXor[a ^ b] = 1;
    }
  }

  const tripleXor = new Uint8Array(LIMIT);

  for (let xor = 0; xor < LIMIT; xor++) {
    if (pairXor[xor] === 0) continue;

    for (const value of values) {
      tripleXor[xor ^ value] = 1;
    }
  }

  let answer = 0;

  for (const reachable of tripleXor) {
    answer += reachable;
  }

  return answer;
};

uniqueXorTriplets([6, 7, 8, 9]);
