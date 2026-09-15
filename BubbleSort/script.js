// Sort an Array in Ascending Order Using Bubble Sort
// Input: [5, 3, 8, 4, 2]
// Output: [2, 3, 4, 5, 8]
// function asc(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let swapped = false;
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//         swapped = true;
//       }
//     }
//     if (!swapped) break;
//   }
//   console.log(arr);
// }
// asc([5, 3, 8, 4, 2]);

// Sort an Array in Descending Order Using Bubble Sort
// Input: [7, 1, 5, 3, 2]
// Output: [7, 5, 3, 2, 1]
// function desc(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let swapped = false;
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j] < arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         swapped = true;
//       }
//     }
//     if (!swapped) break;
//   }
//   console.log(arr);
// }
// desc([5, 3, 8, 4, 2]);

// Sort a String Alphabetically Using Bubble Sort Logic
// Input: "javascript"
// Output: "aacijprstv" (Treat string as array of characters.)
// function sortAlphabets(str) {
//   let res = str.toLowerCase().split('');
//   for (let i = 0; i < res.length - 1; i++) {
//     let swapped = false;
//     for (let j = 0; j < res.length - 1 - i; j++) {
//       if (res[j] > res[j + 1]) {
//         [res[j], res[j + 1]] = [res[j + 1], res[j]];
//         swapped = true;
//       }
//     }
//     if (!swapped) break;
//   }
//   console.log(res.join(''));
// }
// sortAlphabets("javascript");

// Sort an Array and Count the Number of Swaps Performed
// Input: [4, 3, 2, 1]
// Output:
// Sorted: [1,2,3,4]
// Swaps: 6
// function sortCount(arr) {
//   let count = 0,
//     swapped = false;
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         swapped = true;
//         count++;
//       }
//     }
//     if (!swapped) break;
//   }
//   console.log(arr, "total swaps =", count);
// }
// sortCount([4, 3, 2, 1])

//  Sort an Array of Objects by Age (Ascending)
// Input:

// [
//   { name: "A", age: 25 },
//   { name: "B", age: 20 },
//   { name: "C", age: 30 },
// ];
// Output: Sorted by age.
// function sortbyAge(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let swapped = false;
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j].age > arr[j+1]['age']) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         swapped = true;
//       }
//     }
//     if (!swapped) break;
//   }
//   console.log(arr);
// }
// sortbyAge([
//   { name: "A", age: 25 },
//   { name: "B", age: 20 },
//   { name: "C", age: 30 },
// ]);

//  Sort an Array of Characters Case-Insensitive
// Input: ['b', 'A', 'd', 'C']
// Output: ['A', 'b', 'C', 'd']
// function sortCaseInsensetive(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//     let swapped = false;
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j].toLowerCase() > arr[j+1].toLowerCase()) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         swapped = true;
//       }
//     }
//     if (!swapped) break;
//   }
//   console.log(arr);
// }
// sortCaseInsensetive(['b', 'A', 'd', 'C'])

// Sort a 2D Array by the First Element of Each Subarray
// Input:

// [[3, "c"], [1, "a"], [2, "b"]]
// Output:

// [[1, "a"], [2, "b"], [3, "c"]]
// function sort2DArray(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let swapped = false;
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j][0] > arr[j + 1][0]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         swapped = true;
//       }
//     }
//     if (!swapped) break;
//   }
//   console.log(arr);
// }
// sort2DArray([[3, "c"], [1, "a"], [2, "b"]])

// Sort an Array in Ascending Order but Stop After K Passes
// Input: [5, 4, 3, 2, 1], K = 2
// Output: Array state after 2 bubble sort passes.
// function sortStopAtk(arr, k) {
//   let count = 0;
//   for (let i = 0; i < Math.min(arr.length - 1, k); i++) {
//     let swapped = false;
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         swapped = true;
//       }
//     }
//     if (!swapped) break;
//   }
//   console.log(arr);
// }
// sortStopAtk([5, 4, 3, 2, 1], 2);

//  Sort Only the Even Numbers in an Array (Odd Numbers Stay in Place)
// Input: [9, 4, 2, 7, 6, 5]
// Output: [9, 2, 4, 7, 6, 5] (Sort evens using bubble sort while keeping odd numbers fixed.)
// function sortEvenNoOnly(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length - 1; i++) {
//     let swapped = false;
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j] % 2 === 0 && arr[j + 1]%2 === 0) {
//         if (arr[j] > arr[j + 1]) {
//           [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//           swapped = true;
//         }
//       }
//     }
//     if (!swapped) break;
//   }
//   console.log(arr);
// }
// sortEvenNoOnly([9, 4, 2, 7, 6, 5])
