//  Find an Element in an Array Using Linear Search
// Input: array = [4, 2, 7, 1, 9], element = 7
// Output: Found at index 2

// function search(arr, tar) {
//   for (const key in arr) {
//     if (arr[key] === tar) {
//       console.log("Found at index", key);
//     }
//   }
// }
// search([4, 2, 7, 1, 9], 7);

//  Find the First Occurrence of an Element
// Input: [3, 5, 3, 7, 3], search = 3
// Output: index 0
// function fitstOcc(arr, tar) {
//   for (const key in arr) {
//     if (arr[key] === tar) {
//       return key;
//     }
//   }
// }
// console.log(fitstOcc([3, 5, 3, 7, 3],3));

// Find the Last Occurrence of an Element
// Input: [3, 5, 3, 7, 3], search = 3
// Output: index 4
// function lastOcc(arr, tar) {
//     for (let i = arr.length-1; i >= 0; i--) {
//         if (arr[i]===tar) {
//             return `index ${i}`
//         }
//     }
// }
// console.log(lastOcc([3, 5, 3, 7, 3],3));

// Count How Many Times an Element Appears
// Input: [1, 2, 2, 3, 2, 4], element = 2
// Output: 3 times
// function noofOcc(arr, tar) {
//   let count = 0;
//   for (const ele of arr) {
//     if (ele === tar) {
//       count++;
//     }
//   }
//   console.log(count, "times");
// }
// noofOcc([1, 2, 2, 3, 2, 4],2)

// Find All Indexes Where the Element Appears
// Input: [5, 7, 5, 9, 5], search = 5
// Output: [0, 2, 4]
// function allIndex(arr, tar) {
//   let res = [];
//   for (const key in arr) {
//     if (arr[key] === tar) {
//       res.push(+key);
//     }
//   }
//   console.log(res);
// }
// allIndex([5, 7, 5, 9, 5], 5);

// Linear Search in Array of Objects
// Input:

// [
//   { id: 1, name: "A" },
//   { id: 2, name: "B" },
//   { id: 3, name: "C" },
// ];
// Search id = 2

// Output: {id:2, name:"B"}
function searchObj(arr, tar) {
  for (const key in arr) {
    if (arr[key]["id"] === tar) {
      console.log(arr[key]);
    }
  }
}
searchObj(
  [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" },
  ],
  2,
);
