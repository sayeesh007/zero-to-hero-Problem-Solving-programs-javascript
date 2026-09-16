//  Sort an Array in Ascending Order Using Selection Sort
// Input: [7, 2, 9, 4, 1]
// Output: [1, 2, 4, 7, 9]
// function sortAsx(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }
//     if (minIndex !== i) {
//       [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//     }
//   }
//   console.log(arr);
// }
// sortAsx([7, 2, 9, 4, 1]);

// Sort an Array in Descending Order
// Input: [3, 8, 5, 2, 9]
// Output: [9, 8, 5, 3, 2]
// function sortDesc(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let maxIndex = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] > arr[maxIndex]) {
//         maxIndex = j;
//       }
//     }
//     if (maxIndex !== i) {
//       [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]];
//     }
//   }
//   console.log(arr);
// }
// sortDesc([3, 8, 5, 2, 9]);




// Find the Kth Smallest Element Using Selection Logic
// Input: [9, 4, 7, 1, 3], K = 3
// Output: 4?
// function sortKElement(arr, k) {
//   for (let i = 0; i < Math.min(arr.length - 1, k); i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }
//     if (minIndex !== i) {
//       [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//     }
//   }
//   console.log(arr[k-1],arr);
// }
// sortKElement([9, 4, 7, 1, 3], 3);



// Sort an Array of Objects by Name
// Input:
// [{ name: "Charlie" }, { name: "Alice" }, { name: "Bob" }];
// Output: Sorted alphabetically by name.
// function sortObj(arr){
//     for (let i = 0; i < arr.length - 1; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j].name < arr[minIndex].name) {
//         minIndex = j;
//       }
//     }
//     if (minIndex !== i) {
//       [arr[i]["name"], arr[minIndex]["name"]] = [arr[minIndex]["name"], arr[i]["name"]];
//     }
//   }
//   console.log(arr);
// }
// sortObj([{ name: "Charlie" }, { name: "Alice" }, { name: "Bob" }])

