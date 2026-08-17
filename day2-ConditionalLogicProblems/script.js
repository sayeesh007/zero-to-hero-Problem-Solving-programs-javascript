// FIND THE MAXIMUM OF 3 NUMBERS

// function maxOfThree(a, b, c) {
//   if (a > b) {
//     if (a > c) {
//       console.log(`${a} is greater`);
//     } else {
//       console.log(`${c} is greater`);
//     }
//   } else {
//     if (b > c) {
//       console.log(`${b} is greater`);
//     } else {
//       console.log(`${c} is greater`);
//     }
//   }
// }

// maxOfThree(124,5425,121)

//CALCULATING ELECTRICITY BILL
//CONDITIONS
// 0–100 units → ₹5 per unit
// 101–200 units → ₹7 per unit
// 201–300 units → ₹10 per unit
// Above 300 units → ₹12 per unit

// function bill(u) {
//   if (u < 100) {
//     let bill = u * 5;
//     console.log(`bill is : ${bill}`);
//   } else if (u < 200) {
//     let bill = 100 * 5 + (u - 100) * 7;
//     console.log(`bill is : ${bill}`);
//   } else if (u < 300) {
//     let bill = 100 * 5 + 100 * 7 + (u - 200) * 10;
//     console.log(`bill is : ${bill}`);
//   } else {
//     let bill = 100 * 5 + 100 * 7 + 100 * 10 + (u - 300) * 12;
//     console.log(`bill is : ${bill}`);
//   }
// }
// bill(125)

//CHECKING THE YEAR IS LEAP YEAR OR NOT

// function leap(year) {
//   if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
//     console.log(`year is a Leap year`);
//   } else {
//     console.log(`year is a not Leap year`);
//   }
// }
// leap(2020);

// CHECKING THE CHARECTOR IS VOWEL OR NOT
// function vowel(ch) {
//   const vowSet = new Set("a", "e", "i", "o", "u", "A", "E", "I", "O", "U");
//   vowSet.has(ch)
//  ? console.log(`${ch} is a vowel`)
//     : console.log(ch, "is not a vowel");
// }
// vowel('z')

// Check if a Character is UPPERCASE, LOWERCASE, DIGIT, or SPECIAL CHARACTER
// function identify(ch) {
//   /[a-z]/.test(ch)
//     ? console.log(ch, "is a lowercase character")
//     : /[A-Z]/.test(ch)
//       ? console.log(ch, "is a uppercase character")
//       : /[0-9]/.test(ch)
//         ? console.log(ch, "is a Number")
//         : console.log(ch, "is a Special character");
// }
// identify2('Z')
// ANOTHER SOLUTION FOR THIS USING CHAR CODE
// function identify2(ch) {
//   let code = ch.charCodeAt(0);
//   if (code >= 65 && code <= 90) {
//     console.log(ch, "is a Upper case charactor");
//   } else if (code >= 97 && code <= 122) {
//     console.log(ch, "is a Lower case charactor");
//   } else if (code >= 48 && code <= 57) {
//     console.log(ch, "is a Number");
//   } else {
//     console.log(ch, "is a Special charactor");
//   }
// }

// CHECKING THE TYPE OF THE TRIANGLE USING THE SIDES
// function triangle(x, y, z) {
// const [a,b,c] = [x,y,z].sort((a,b)=>a-b)
//   if (a ** 2 + b ** 2 == c ** 2) {
//     console.log(a, b, c, "is the Right angled Triangle");
//   } else if (a == b && a == c) {
//     console.log(a, b, c, "is the Equilateral angled Triangle");
//   } else if (a == b || a == c) {
//     console.log(a, b, c, "is the isocelas angled Triangle");
//   } else {
//     console.log(a, b, c, "is the Scalan angled Triangle");
//   }
// }
// triangle(5, 3, 4);

//  CALCULATE THE INCOME TAX BASED ON SALES
// Up to ₹2,50,000 → No tax
// ₹2,50,001 – ₹5,00,000 → 5%
// ₹5,00,001 – ₹10,00,000 → 20%
// Above ₹10,00,000 → 30%

function calculateTax(income) {
  if (income <= 250000) {
    console.log("No Tax");
  } else if (income <= 500000) {
    let tax = (income - 250000) * 0.05;
    console.log(tax, "is your payable tax");
  } else if (income <= 1000000) {
    let tax = 250000 * 0.05 + (income - 500000) * 0.2;
    console.log(tax, "is your payable tax");
  } else {
    let tax = 250000 * 0.05 + 500000 * 0.2 + (income - 1000000) * 0.3;
    console.log(tax, "is your payable tax");
  }
}
calculateTax(1200000)