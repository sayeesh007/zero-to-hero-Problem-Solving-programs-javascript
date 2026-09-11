// Find the Maximum and Minimum Element
// Input: [10, 25, 3, 18]
// Output: Max = 25, Min = 3

// function findMaxMin(arr) {
//   if (arr.length <= 1) return arr;
//   let max = -Infinity,
//     min = Infinity;
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] > max) {
//       max = arr[index];
//       continue;
//     }
//     if (arr[index] < min) {
//       min = arr[index];
//     }
//   }
//   console.log("maximum =", max, "minimum =", min);
// }
// findMaxMin([10, 25, 3, 18])

//  Reverse an Array (Manual Method Only)
// Input: [1, 2, 3, 4, 5]
// Output: [5, 4, 3, 2, 1]
// ✨ Two pointer technique, no reverse().
// function reverseArr(arr) {
//   if (arr.length <= 1) return arr;
//   let start = 0,
//     end = arr.length - 1;
//   while (start < end) {
//     [arr[start], arr[end]] = [arr[end], arr[start]];
//     start++;
//     end--;
//   }
//   console.log(arr);
// }
// reverseArr([1, 2, 3, 4, 5]);

// Check if an Array is Sorted (Ascending)
// Input: [1, 2, 3, 4, 5]
// Output: Sorted
// function checkSorted(arr) {
//     if(arr.length <=1) return arr
//     for (let i = 0; i < arr.length-1; i++) {
//         if(arr[i]>arr[i+1]){
//             return 'Not sorted'
//         }
//     }
//     return 'Sorted'
// }
// console.log(checkSorted([1, 2, 3, 5, 5]));

// Remove All Duplicates From an Array (Use filter method)
// Input: [1, 2, 2, 3, 3, 4]
// Output: [1, 2, 3, 4]
// function removeDupe(arr) {
//   const res = new Set(arr);
//   return [...res];
//   return Array.from(res);
// }
// console.log(removeDupe([1, 2, 2, 3, 3, 4]));

// with filter
// function removeDupeWithFilter(arr) {
//   return arr.filter((ele, index) => arr.indexOf(ele) === index);
// }
// console.log(removeDupeWithFilter([1, 2, 2, 3, 3, 4]));

// Merge Two Arrays Without Using concat or spread
// Input: [1, 2, 3] and [4, 5]
// Output: [1, 2, 3, 4, 5]
// function merge(arr, arr2) {
//   for (let i = 0; i < arr2.length; i++) {
//     arr.push(arr2[i]);
//   }
//   console.log(arr);
// }
// merge([1, 2, 3], [4, 5]);

// Find the Second Largest Element
// Input: [10, 20, 4, 45, 99]
// Output: 45
// function secondLargest(arr) {
//     if(arr.length<2) return null
//   const sorted = arr.sort((a, b) => a - b);
//   console.log(sorted[arr.length - 2]);
// }
// secondLargest([10, 20, 4, 45, 999, 99]);

// function secondLargest(arr) {
//   if (arr.length < 2) return null;
//   let second = -Infinity,
//     first = -Infinity;
//   for (const element of arr) {
//     if (element > first) {
//       second = first;
//       first = element;
//     } else if (element > second && element !== first) {
//       second = element;
//     }
//   }
//   return second === -Infinity ? null : second;
// }
// console.log(secondLargest([10, 20, 4, 45, 999, 999, 99]));

//  Check if Two Arrays Are Equal (Same Order)
// Input: [1, 2, 3] vs [1, 2, 3]
// Output: Equal
// function checkEqual(arr1, arr2) {
//   if (arr1.length !== arr2.length) return "Not Equal";
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return "Not Equal";
//     }
//   }
//   return "Equal";
// }
// console.log(checkEqual([1, 2, 3], [1, 2, 3]));

// Count Even and Odd Numbers in an Array
// Input: [2, 5, 7, 8, 10]
// Output: Even = 3, Odd = 2
// function countOddEven(arr) {
//     if(arr.length<1) return null
//   let even = 0,
//     odd = 0;
//   for (const element of arr) {
//     if (element % 2 === 0) {
//       even++;
//       continue;
//     }
//     odd++;
//   }
//   console.log("Even =", even, "Odd =", odd);
// }
// countOddEven([2, 5, 7, 8, 10])

// Find All Unique Pairs Whose Sum Equals a Target
// Input: [1, 2, 3, 4, 5], target = 6
// Output: (1,5), (2,4)
// function findPairs(arr, tar) {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     let val = arr.indexOf(tar - arr[i], i + 1);
//     if (val !== -1) {
//       res.push([arr[i], arr[val]]);
//     }
//   }
//   return res;
// }
// console.log(findPairs([1, 2, 3, 4, 5], 6));

// with O(n) optimised solution
// function findPairs(arr, tar) {
//   let seen = new Set();
//   let res = [];
//   for (const ele of arr) {
//     if (seen.has(tar - ele)) {
//       res.push([tar - ele,ele]);
//     }
//     seen.add(ele);
//   }
//   console.log(res);
// }
// findPairs([1, 2, 3, 4, 5], 6)

// Left Shift an Array by One Position
// Input: [1, 2, 3, 4]
// Output: [2, 3, 4, 1] ✨ Manual shifting, moving first element to end.
// function leftShift(arr) {
//   let res = []
//   for (let i = 0; i < arr.length-1; i++) {
//     res[i] = arr[i + 1];
//   }
//   res.push(arr[0])
//   console.log(res);
// }
// leftShift([1, 2, 3, 4]);

// Count How Many Times an Element Appears in an Array
// Input: array = [1, 4, 4, 4, 2], element = 4
// Output: 3
// function countreptEle(arr, ele) {
//   let count = 0;
//   for (const item of arr) {
//     if (item === ele) count++;
//   }
//   console.log(count);
// }
// countreptEle([1,1,2, 4, 4, 4, 2],4)