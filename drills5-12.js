// 5 URL-ify a string
// write a method that takes in a string and rpelaces all empty spaces with '%20'

const stringURLify = (string) => {
  let outString = string.split(" ").join("%20");
  return outString;
};
// console.log(stringURLify("tauhida parveen"));
// console.log(stringURLify("www.thinkful.com /tauh ida parv een"));

// 6 Filter an array
//Imagine you have an array of numbers. Write an algorithm to remove all numbers less than 5 from the array. DO NOT use Array's built-in .filter() method here; write the algorithm from scratch.
const filterArray = (array, num) => {
  let outArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= num) {
      outArr.push(array[i]);
    }
  }
  return outArr;
};

// console.log(filterArray([4, 6, -3, 5, -2, 1], 5));

// 7. Max sum in the array
// You are given an array containing positive and negative integers. Write an algorithm which will find the largest sum in a continuous sequence.
const maxSum = (arr) => {
  let currentMax = 0;
  let maxSoFar = 0;

  for (var i = 0; i < arr.length; i++) {
    // Set current max to either 0 or the currentMax + this index
    currentMax = Math.max(0, currentMax + arr[i]);
    // Set the absolute max to either the currentMax or itself
    maxSoFar = Math.max(currentMax, maxSoFar);
  }
  // Return our largest accumulative value
  return maxSoFar;
};

// console.log(maxSum([4, 6, -3, 5, -2, 1]));

// 8. Merge arrays
//Imagine you have 2 arrays which have already been sorted. Write an algorithm to merge the 2 arrays into a single array, which should also be sorted.
const mergeArrays = (left, right) => {
  let mergedArr = [];
  let indexL = 0;
  let indexR = 0;
  let current = 0;

  //While our current value is lower than all indexes of both arrays
  while (current < left.length + right.length) {
    // check if we are out of items for left
    let isLeftDepleted = indexL >= right.length;
    // Check if we are out of items for right
    let isRightDepleted = indexR >= right.length;

    // If left array isn't depleted and right array IS depleted or right array's value is larger
    if (!isLeftDepleted && (isRightDepleted || left[indexL] < right[indexR])) {
      // Push our left array value to our merged array
      mergedArr[current] = left[indexL];
      // Increase our left array's index
      indexL++;
    } else {
      // push our right array value to our merged array
      mergedArr[current] = right[indexR];
      // increase our right array's index
      indexR++;
    }
    // Increase our counter, as a value was added
    current++;
  }
  console.log(mergedArr);
  return mergedArr;
};

//mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]);

// 9. Remove characters
const removeCharacters = (string, remove) => {
  let outString = "";

  // Helper function to see if a character is to be removed
  const isCharNull = (char) => {
    for (let i = 0; i < remove.length; i++) {
      if (char === remove[i]) {
        return true;
      }
    }
    return false;
  };
  for (let i = 0; i < string.length; i++) {
    if (!isCharNull(string[i])) {
      outString += string[i];
    }
  }
  return outString;
};

// console.log(
//   removeCharacters("Battle of the Vowels: Hawaii vs. Grozny", "aeiou")
// );

// 10. Products
// Given an array of numbers, write an algorithm to find out the products of every other number except the number at each index.
// Input: [1, 3, 9, 4]   Output:[108, 36, 12, 27]

const products = (array) => {
  let outArr = [];
  // iterate through array and multiple every other number
  for (let i = 0; i < array.length; i++) {
    let filtered = array.filter((item) => item !== array[i]);
    let reduced = filtered.reduce((acc, value) => acc * value);
    outArr.push(reduced);
  }
  return outArr;
};
const products2 = (array) => {
  let outArr = [];
  array.forEach((num) => {
    console.log(`num ${num}, index ${idx}`);
    let filtered = array.filter((item) => item !== num);
    let reduced = filtered.reduce((acc, value) => acc * value);
    outArr.push(reduced);
  });
  return outArr;
};

console.log(products2([1, 3, 9, 4]));
