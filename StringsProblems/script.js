// Reverse a String (Manual Method Only)
// Input: "javascript"
// Output: "tpircsavaj" ✨ Use a loop — no .reverse().

// function reverseStr(str){
//     let arr=''
//     for (let i = str.length; i >= 0; i--) {
//         arr += str.charAt(i)
//     }
//     console.log(arr)
// }
// reverseStr('javascript')

//  Check if a String is a Palindrome
// Input: "racecar"
// Output: Palindrome ✨ Compare characters from both ends using two-pointer logic.

// function pali(str) {
//   let rev = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     rev += str.charAt(i);
//   }
//   str === rev ? console.log("palindrome") : console.log("Not Palindrome");
//   console.log(rev);
// }
// pali("racecar");

//  Count Frequency of Each Character
// Input: "banana"
// Output: { b:1, a:3, n:2 } ✨ Teaches hash maps / JS objects + iteration.
// function freq(str) {
//   let res = {};
//   for (let i = 0; i < str.length; i++) {
//     let count = 1;
//     if (res[str.charAt(i)]) continue
//     for (let j = i + 1; j < str.length; j++) {
//       if (str.charAt(i) === str.charAt(j)) {
//         count++;
//       }
//     }
//     res[str.charAt(i)] = count;
//   }
//   console.log(res);
// }
// freq('banana')

// optimised O(n) solution
// function freq(str) {
//   let res = {};
//   for (let i = 0; i < str.length; i++) {
//     res[str.charAt(i)] = res[str.charAt(i)] ? res[str.charAt(i)] + 1 : 1;
//   }
//   console.log(res);
// }
// freq("banana");

// Find the Most Frequent Character in a String
// Input: "success"
// Output: Most frequent: s (3 times) ✨ Builds on frequency map — find maximum occurrence.
// function mostFreq(str) {
//   let res = {},
//     count = 0,
//     max = 0;
//   for (let i = 0; i < str.length; i++) {
//     let char = str.charAt(i);
//     res[char] = res[char] ? res[char] + 1 : 1;
//   }
//   for (const key in res) {
//     if (res[key] > count) {
//       count = res[key];
//       max = key;
//     }
//   }
//   console.log(max,`${count} times`);
// }
// mostFreq("success");

// O(n) otimised solution
// function mostFreq(str) {
//   let res = {},
//     maxCount = 0,
//     maxChar = "";
//   for (const char of str) {
//     res[char] = (res[char] || 0) + 1;
//     if (res[char] > maxCount) {
//       maxCount = res[char];
//       maxChar = char;
//     }
//   }
//   console.log(maxChar, maxCount, "times");
// }
// mostFreq("success");

//  Check if Two Strings Are Anagrams (Without Sorting)
// Input: "listen", "silent"
// Output: Anagram ✨ Use character frequency comparison — no .sort().
// function checkAnagram(str1, str2) {
//   if (str1.length !== str2.length) return console.log("Not anagram");

//   let res1={}, res2={};
//   for (const char of str1) {
//     res1[char] = (res1[char] || 0) + 1;
//   }
//   for (const char of str2) {
//     res2[char] = (res2[char] || 0) + 1;
//   }
//   for (const char of str1) {
//     if (res1[char] !== res2[char]) {
//       return console.log("Not Anagram");
//     }
//   }
//   return console.log("Anagram");
// }
// checkAnagram("listen", "silent");

// Remove All Duplicate Characters (Keep First Occurrence)
// Input: "programming"
// Output: "progamin" ✨ Use a visited set + build new string.
// function removeDup(str) {
//   let res = "";
//   for (const char of str) {
//     if (!res.includes(char)) {
//       res += char;
//     }
//   }
//   console.log(res);
// }
// removeDup('programming')

// let res = [...new Set('programming')].join('')
// console.log(res);


