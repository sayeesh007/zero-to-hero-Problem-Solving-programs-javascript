//SPLIT NUMBER IN TO DIGITS
// Input: N = 12345
// Output: [1, 2, 3, 4, 5]
// function splitNumberIntoDigits(n) {
//   let digits = [];
//   while(n>0){
//     let mod = n%10
//     n=parseInt(n/10)
//     digits.push(mod)
//   }
//   console.log( digits)
// }
// splitNumberIntoDigits(12345)

//Remove the Decimal Point Mathematically
// Input: N = 12.34
// Output: 1234
// function removeDecimal(n) {
//   while (n % 1 !== 0) {
//     n *= 10;
//   }
//   console.log(n);
// }
// removeDecimal(12.34);

// Separate Whole and Fractional Parts of a Number
// Input: N = 5.75
// Output: Whole = 5, Fraction = 0.75
// function sepNum(n) {
//   let wh = parseInt(n / 1);
//   let fr = n - wh;
//   console.log("whole no = ", wh, " fraction = ", fr);
// }
// sepNum(5.75);

// Count Whole and Fractional Digits Separately
// Input: N = 12.345
// Output: Whole Count = 2, Fraction Count = 3
// function countNum(n) {
//   let wh = parseInt(n);
//   let fr = n - parseInt(wh);
//   let whCount = 0;
//   let frCount = 0;
//   console.log(wh,fr);

//   while (wh > 0) {
//     wh = parseInt(wh / 10);
//     whCount++;
//   }
//   console.log("whole count = ", whCount);
//   if (fr != 0) {
//     while (parseInt(fr * 10) > 0) {
//       fr = fr * 10 - parseInt(fr);
//       frCount++;
//     }
//   }
//   console.log("fraction count = ", frCount);
// }
// countNum(12.33);
// console.log(12.34-10-2);

// Generate a Decimal Number from Whole and Fractional Digits

// Input: Whole = [1, 2], Fraction = [3, 4]
// Output: 12.34
// ✨ Form the number mathematically by combining the digits from both arrays using powers of 10.

// function convetNum(w, fr) {
//   let num = 0;
//   let frnum = "";
//   let count = 0;
//   for (let i = w.length - 1; i >= 0; i--) {
//     num += w[i] * Math.pow(10, count);
//     count += 1;
//   }
//   for (let i = fr.length - 1; i >= 0; i--) {
//     frnum += fr[i];
//   }
//   console.log(num + frnum / Math.pow(10, fr.length));
// }
// convetNum([1, 2], [3, 4]);
//

// Reverse a Number
// Input: N = 1234
// Output: 4321
// function rev(n) {
//   let res = "";
//   while (n > 0) {
//     res += n % 10;
//     n = parseInt(n / 10);
//   }
//   console.log(Number(res));
// }
// rev(1234);

// Remove the Decimal Point Mathematically
// Input: N = 12.34
// Output: 1234
// ✨ Do not use string operations.
// function remDec(n) {
//   while (n % 1 !== 0) {
//     n *= 10;
//   }
//   console.log(n);
// }
// remDec(12.34)

// Separate Whole and Fractional Parts of a Number
// Input: N = 5.75
// Output: Whole = 5, Fraction = 0.75
// ✨ Use mathematical logic to separate the integer and fractional portions without using built-in functions. Don't use Math.trunc() or Math.floor() method.
// function sep(n) {
//   let wh = Number(parseInt(n));
//   let fr = Number((n - wh).toFixed(n));
//   console.log(wh, fr);
// }
// sep(5.345);

// Generate a Decimal Number from Whole and Fractional Digits

// Input: Whole = [1, 2], Fraction = [3, 4]
// Output: 12.34
// ✨ Form the number mathematically by combining the digits from both arrays using powers of 10.
// function num(n, m) {
//   let wh = 0;
//   let fr = 0;
//   for (let i = 0; i < n.length; i++) {
//     wh += n[i] * 10 ** (n.length - 1 - i);
//   }
//   for (let i = 1; i <= m.length; i++) {
//     fr += m[i - 1] * 10 ** -i;
//   }
//   console.log(wh + fr);
// }
// num([1, 2], [4, 3, 4]);

// Check if a Number is a Palindrome

// Input: N = 121
// Output: Palindrome
// ✨ Compares original and reversed numbers to detect symmetry.
// function pali(n) {
//   let rev = "";
//   let num = n;
//   while (num > 0) {
//     rev += num % 10;
//     num = parseInt(num / 10);
//   }

//   if (n === +rev) {
//     console.log("its Palindrome");
//   } else {
//     console.log("its not palindrome");
//   }
// }
// pali(1221);

// Check if a Number is an Armstrong Number (also called a Narcissistic Number)

// Input: N = 153
// Output: Armstrong Number
// ✨ Armstrong Number: 1³ + 5³ + 3³ = 153, 1⁴ + 6⁴ + 3⁴ + 4⁴ = 1634.
// function armstrong(n) {
//   let arr = []
//   let num=n
//   let sum = 0;
//   while(num>0){
//     arr.push(num%10)
//     num= parseInt(num/10)
//   }
//   for (let i = 0; i < arr.length; i++) {
//     sum += Math.pow(arr[i],arr.length)    
//   }
//   if (sum === n) {
//     console.log("its a armstrong Number");
//   } else {
//     console.log("its not armstrong number");
//   }
// }
// armstrong(153)
