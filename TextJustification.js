const fullJustify = function (words, maxWidth) {
  const result = [];
  let index = 0;

  while (index < words.length) {
    const lineWords = [];
    let lettersLength = 0;

    while (index < words.length) {
      const word = words[index];

      const minimumSpaces = lineWords.length;

      if (lettersLength + word.length + minimumSpaces > maxWidth) break;

      lineWords.push(word);

      lettersLength += word.length;

      index++;
    }

    const isLastLine = index === words.length;

    if (isLastLine || lineWords.length === 1) {
      let line = lineWords.join(" ");
      line += " ".repeat(maxWidth - line.length);
      result.push(line);
    } else {
      const numberOfGaps = lineWords.length - 1;
      const totalSpaces = maxWidth - lettersLength;

      const spacePerGap = Math.floor(totalSpaces / numberOfGaps);

      let extraSpaces = totalSpaces % numberOfGaps;

      let line = "";

      for (let i = 0; i < lineWords.length; i++) {
        line += lineWords[i];

        if (i < numberOfGaps) {
          let spaces = spacePerGap;

          if (extraSpaces > 0) {
            spaces++;
            extraSpaces--;
          }
          line += " ".repeat(spaces);
        }
      }
      result.push(line);
    }
  }
  return result;
};

console.log(
  fullJustify(
    ["This", "is", "an", "example", "of", "text", "justification."],
    16,
  ),
);
