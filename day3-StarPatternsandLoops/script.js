//PRINT THE PATTERN
// *
// **
// ***
// ****
// *****

// function pattern(n){
//     for (let i = 1; i <= n; i++) {
//         let str=''
//         for (let j = 0; j < i; j++) {
//             str +='*'
//         }
//         console.log(str);
//     }
// }
// pattern(5)

//PRINT THE PATTERN
// *****
// ****
// ***
// **
// *

// function pattern(n) {
//   for (let i = n; i > 0; i--) {
//     let str = "";
//     for (let j = 0; j < i; j++) {
//       str += "*";
//     }
//     console.log(str);
//   }
// }
// pattern(5)

//PRINT THE PATTERN
//     *
//    ***
//   *****
//  *******
// *********
// function pattern(n) {
//   let str = "";
//   for (let i = 1; i <= n; i++) {
//     for (let j = n; j > i; j--) {
//       str += " ";
//     }
//     for (let k = 1; k < i; k++) {
//       str += "*";
//     }
//     for (let l = 0; l < i; l++) {
//       str += "*";
//     }
//     str += "\n";
//   }
//   console.log(str);
// }
// pattern(5);

//PRINT THE PATTERN
// *********
//  *******
//   *****
//    ***
//     *
// function pattern(n) {
//   let str = "";
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j < i; j++) {
//       str += " ";
//     }
//     for (let j = n; j > i; j--) {
//       str += "*";
//     }
//     for (let j = n; j >= i; j--) {
//       str += "*";
//     }
//     str += "\n";
//   }
//   console.log(str);
// }
// pattern(5);

//PRINT THE PATTERN
// *****
// *   *
// *   *
// *   *
// *****
function pattern(n) {
  let str = "";
  for (let i = 0; i < n; i++) {
    str += "*";
    if (i === 0 ) {
      for (let j = 0; j < n - 2; j++) {
        str += "+";
      }
    } else if(i===n-1){
      for (let j = 0; j < n - 2; j++) {
        str += "+";
      }
    }else{
      for (let k = 0; k < n; k++) {{
        str += '_'
      }
    }
    str += "*";
  }
  str += "\n";

  console.log(str);
}
}
pattern(5);
