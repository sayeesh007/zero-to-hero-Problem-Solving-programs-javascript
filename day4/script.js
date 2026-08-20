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