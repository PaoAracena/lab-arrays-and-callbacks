const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (words) => {
  return words.every((word) => {
    return word > 2
  })
};

const isEveryWordShorterThan7 = (words) => {
  return words.every((word) => {
    return word.length < 7
  })
};

// Filter

const arrayLessThan5 = (nums) => {
  return nums.filter((num) => {
    return num < 5
  })
};

const arrayOddLengthWords = (words) => {
   return words.filter((word) => {
     return word.length % 2
   })
};

// Find

const firstValDivisibleBy4 = (nums) => {
   return nums.find((num) => {
    return num % 4 === 0
   })
};

const firstWordLongerThan4Char = (words) => {
   return words.find((word) => {
    return word.length > 4
   })
};

// Find Index

const firstNumIndexDivisibleBy3 = (nums) => {
   return nums.findIndex((num) => {
    return num % 3 === 0 
   })
};

const firstWordIndexLessThan2Char = (words) => {
   return words.findIndex((word) => {
    return word.length < 2 
   })
};

// For Each

const logValuesTimes3 = (nums) => {
  const tripleANumber = (number) => {
    return  number * 3
  }
  console.log(nums.forEach(tripleANumber))
};

const logWordsWithExclamation = (words) => {
  const wordsWithExclamation = [];

  words.forEach((word) => {
    wordsWithExclamation.push(`${word}!`);
  });

  console.log(wordsWithExclamation);
};

// Map

const arrayValuesSquaredTimesIndex = (nums) => {
  return nums.map((num, index) => {
    return num * num * index;
  });
};

const arrayWordsUpcased = (words) => {
   return words.map((word) => {
    return word.toUpperCase()
   })
};

// Some

const areSomeNumsDivisibleBy7 = (nums) => {
   return nums.some((num) => {
     return num % 7 === 0
   })
};

const doSomeWordsHaveAnA = (words) => {
  return words.some((word) => {
    return word.includes("a")
  })
};

module.exports = {
  isEveryNumGreaterThan2,
  isEveryWordShorterThan7,
  arrayLessThan5,
  arrayOddLengthWords,
  firstValDivisibleBy4,
  firstWordLongerThan4Char,
  firstNumIndexDivisibleBy3,
  firstWordIndexLessThan2Char,
  logValuesTimes3,
  logWordsWithExclamation,
  arrayValuesSquaredTimesIndex,
  arrayWordsUpcased,
  areSomeNumsDivisibleBy7,
  doSomeWordsHaveAnA,
};
