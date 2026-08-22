// Print All Factors of a Number

// Input: N = 24
// Output: [1, 2, 3, 4, 6, 8, 12, 24]
// function factors(n) {
//   console.log("factors of", n);

//   for (let i = 1; i <= n / 2; i++) {
//     if (n % i === 0) console.log(i);
//   }
//   console.log(n);
// }
// factors(24);

// Print All Multiples of a Number up to N

// Input: Number = 4, Limit = 30
// Output: [4, 8, 12, 16, 20, 24, 28]
// function multiples(n,Limit) {
//   for (let i = 1; i < Limit; i++) {
//     if (i % n === 0) {
//       console.log(i);
//     }
//   }
// }
// multiples(4,30)

// Find the HCF (Highest Common Factor) or GCD of Two Numbers

// Input: 12, 18
// Output: HCF = 6
// function hcf(n, m) {
//   let large;
//   n > m ? (large = n) : (large = m);
//   for (let i = large / 2; i > 0; i--) {
//     if (n % i === 0 && m % i === 0) {
//       console.log(i);
//       break;
//     }
//   }
// }
// hcf(12, 18);

// Find the LCM (Least Common Multiple) of Two Numbers

// Input: 12, 18
// Output: LCM = 36
// function lcm(n, m) {
//   let large;
//   let hcf;
//   n > m ? (large = n) : (large = m);
//   for (let i = large / 2; i > 0; i--) {
//     if (n % i === 0 && m % i === 0) {
//       hcf = i;
//       break;
//     }
//   }
//   console.log("LCM =", (n * m) / hcf);
// }
// lcm(12, 18);

// Count the Total Number of Factors of a Number

// Input: N = 24
// Output: 8 Factors
// function countFactors(n) {
//   let count = 0;
//   for (let i = 1; i <= n; i++) {
//     if (n % i === 0) count += 1;
//   }
//   console.log(count);
// }
// countFactors(24);

// Sum of All Factors of a Number

// Input: N = 12
// Output: Sum = 28
// function sumFactors(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     if (n % i === 0) sum += i;
//   }
//   console.log(sum);
// }
// sumFactors(12)

// Find the Greatest Factor of a Number (Other Than Itself)

// Input: N = 36
// Output: 18
// function gcd(n) {
//   for (let i = n / 2; i > 0; i--) {
//     if (n % i === 0) {
//       console.log(i);
//       break;
//     }
//   }
// }
// gcd(36)

// Check if a Number is a Perfect Number

// Input: N = 28
// Output: Perfect Number
// If sum of all proper divisors = number → Perfect Number.
// function perfecNo(n) {
//   let sum = 0;
//   for (let i = 1; i <= n / 2; i++) {
//     if (n % i === 0) sum += i;
//   }
//   sum === n ? console.log("Perfect Number") : console.log("not perfect");
// }
// perfecNo(28)

// Find the HCF and LCM of Three Numbers

// Input: 8, 12, 16
// Output: HCF = 4, LCM = 48
function hcflcm3(a, b, c) {
  function hcf3(a,b,c){
    const large = Math.max(a, b, c);
    for (let i = large / 2; i > 0; i--) {
      if (a % i === 0 && b % i === 0 && c % i === 0) {
       return i;
      }
    }
  }
  function hcf(a,b){
    let large2= Math.max(a,b);
    for (let i = large2 / 2; i > 0; i--) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
  }
  }
  const lcm = (a*b*c*hcf3(a,b,c))/(hcf(a,b)*hcf(b,c)*hcf(c,a))
  console.log("HCF =", hcf(a,b,c), " LCM =", lcm);
}
hcflcm3(8, 12, 16);
