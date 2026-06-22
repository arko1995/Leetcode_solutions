var maxNumberOfBalloons = function (text) {
  const string = "balloon";
  const map = new Map();
  for (let ch of string) {
    map.set(ch, (map.get(ch) || 0) + 1);
  }

  const argMap = new Map();

  for (let ch of text) {
    argMap.set(ch, (argMap.get(ch) || 0) + 1);
  }

  let maxCopies = Infinity;

  for (let [ch, required] of map) {
    const available = argMap.get(ch) || 0;
    maxCopies = Math.min(maxCopies, Math.floor(available / required));
  }

  return maxCopies;
};

maxNumberOfBalloons("nlaebolko");
