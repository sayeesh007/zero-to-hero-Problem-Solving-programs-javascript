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

// Check if a String Contains Only Alphabets (No Regex)
// Input: "HelloWorld123"
// Output: False ✨ Use ASCII ranges manually.
// function containsAlpha(str) {
//     for (const char of str) {
//         let code = char.charCodeAt(0)
//         if(code < 65 || code > 122 ) return false
//     }
//     return true
// }
// console.log(containsAlpha('HelloWorld123'))

// Reverse Only the Words in a Sentence
// Input: "I love coding"
// Output: "coding love I" ✨ Split manually or build reverser yourself.
// function reverse(str) {
//   let res = [],
//     strIndex = 0,
//     output = [];
//   for (const i in str.trim()) {
//     if (str.charAt(i) === " ") {
//       res.push(str.slice(strIndex, +i));
//       strIndex = +i + 1;
//     }
//   }
//   res.push(str.slice(strIndex));
//   for (let i = res.length - 1; i >= 0; i--) {
//     output.push(res[i]);
//   }
//   console.log(output.join(" "));
// }
// reverse("I love coding");

//  Find the Longest Word in a Sentence
// Input: "coding is beautiful"
// Output: "beautiful" ✨ Manual scanning + longest tracking.
// function findLongest(str) {
//   let res = "",
//     start = 0;
//   for (const i in str) {
//     if (str.charAt(i) === " ") {
//       if (str.slice(start, i).length > res.length) res = str.slice(start, i);
//       start = +i + 1;
//     }
//   }
//   if (str.slice(start).length > res.length) res = str.slice(start);
//   console.log(res);
// }
// findLongest("codiasdfadng is beautiful");

// Count the Number of Words (Manually Without split)
// Input: "  hi   there  world "
// Output: 3 words ✨ Detect transitions from space → non-space using logic.
// function countWords(str) {
//   let count = 0
//   for (let i=0;i<str.length;i++) {
//     if (str[i] !== " " && (i===0 || str[i-1]===' ' )) {
//       count++;
//     }
//   }
//   console.log(count);
// }
// countWords('    hi   there world ')

// Find All Substrings of a String (No Built-ins)
// Input: "abc"
// Output: a, ab, abc, b, bc, c ✨ Nested loops + substring construction.
// function findSubstrings(str) {
//   let res = [];
//   for (let i = 0; i < str.length; i++) {
//     for (let j = i + 1; j <= str.length; j++) {
//       res.push(str.slice(i, j));
//     }
//   }
//   console.log(res);
// }
// findSubstrings("abc");

// without using slice
// function findSubstrings(str) {
//   let res = [];
//   for (let i = 0; i < str.length; i++) {
//     let sub = "";
//     for (let j = i; j < str.length; j++) {
//       sub += str[j];
//       res.push(sub);
//     }
//   }
//   console.log(res);
// }
// findSubstrings('abc')

//  Compress a String (Basic Run-Length Encoding)
// Input: "aaabbccccd"
// Output: "a3b2c4d1" ✨ Count consecutive characters and build encoded output.

// function lengthEncoding(str) {
//   let res = "";
//   for (let i = 0; i < str.length; i++) {
//     let count = 1;
//     while(str[i]===str[i+1]){
//         count++
//         i++
//     }
//     res+=str[i]+count
//   }
//   console.log(res);

// }
// lengthEncoding('aaabbcccccd')

// Find if One String Is a Substring of Another (Manual Method)
// Input: Main string: "hellothere" Target string: "there"

// Output: true ✨ Manual parsing only; check character by character without using includes, or indexOf.
function findSubstring(str, tar) {
  let res = "";
  for (let index = 0; index < str.length; index++) {
    let tarIndex = 0,
      j = 0;

    while (j < tar.length && str[index] === tar[tarIndex]) {
      res += tar[tarIndex];
      j++;
      tarIndex++;
      index++;
    }
  }
  if (res === tar) {
    console.log(true);
  } else {
    console.log(false);
  }
}
findSubstring("hellothere", "there");
