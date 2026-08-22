// Check if a Number is Prime

// Input: 7
// Output: Prime Number
// function checkPrime(n) {
//   for (let i = 2; i < n / 2; i++) {
//     if (n % i === 0) {
//       return console.log(n,"Not prime");
//     }
//   }
//   return console.log(n, "is a Prime");
// }
// checkPrime(7)

// Check if two Numbers are Co-Prime

// Input: (7, 8)
// Output: Co-Prime
// function coPrime(n, m) {
//   const large = Math.max(n, m);
//   for (let i = 2; i <= (n+m)-large; i++) {
//     if (n % i === 0 && m % i === 0) {
//       return console.log(m, n, " is not Co-Prime");
//     }
//   }
//   return console.log(n, m, "is Co-Prime");
// }
// coPrime(4, 9);

// Print Fibonacci Series up to N Terms

// Input: N = 10
// Output: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
// function fib(n) {
//   if (n <= 0) return console.log([0]);
//   if (n === 1) return console.log([0, 1]);
//   let arr = [0,1]
//   let temp=0
//   let a=0;
//   let b=1;
  
//   for (let i = 2; i < n; i++) {
//     // temp = arr[i-2]+arr[i-1]
//     temp= a+b
//     a=b
//     b=temp
//     arr.push(temp)
//   }
//   return console.log(arr)
// }
// fib(2)

