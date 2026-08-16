// 1.Print 1-N numbers

// function printFormForN(n){
//     for (let index = 1; index <= n; index++) {
//         // let res = n-index + 1
//         arr.push(n-index+1)
//         console.log(index);
        
//     }
// }
// function printFromWhileN(n){
//     let i=1
//     while (i<=n) {
//         console.log(i);
//         i++
//     }
// }
// const n= parseInt(prompt("Enter the number till which range you want to print"))
// printFromWhileN(n)

// const printn = document.getElementById('printn')

// const btn = document.querySelector('button')

let arr=[]
// btn.addEventListener('click',()=>{
//     printFormForN(parseInt(printn.value))
//     document.querySelector('.printVal').innerHTML = arr
// })


//print all even numbers
// const prinEven = ()=>{
//     let n = printn.value
//     for (let index = 2; index < n; index+=2) {
//         arr.push(index)
//     }
//     console.log(arr);
    
//     document.querySelector('.printVal').innerHTML = arr
// }
// prinEven(10)

// btn.addEventListener('click',prinEven)



//PRINT sum of N natural numbers

// btn.addEventListener("click",()=>{
//     n = printn.value
//     let sum = 0
//     for (let index = 0; index < n; index++) {
//         sum += index   
//     }
//     document.querySelector('.printVal').innerHTML = sum
// })

//DSA approach for sum of all n numbers

// btn.addEventListener('click',()=>{    
//     n = printn.value
//     let sum = (n*(n-1))/2
//     document.querySelector('.printVal').innerHTML = sum
// })


// FACToROAL OF N

// btn.addEventListener('click',()=>{
//     n = printn.value
//     let prod=1
//     for (let index = 1; index < n; index++) {
//         prod *= index
//     }
//     document.querySelector('.printVal').innerHTML = prod
//     console.log(prod);
    
// })
// function prod(n){
//     let pro=1;
//     if(n<2){
//         return 1
//     }
//     for (let index = 2; index <= n; index+=2) {
//         pro *=index
//     }
//     return pro
// }
// console.log(prod(4))

//sum of all even numbers - DSA O(1)
// let res = (range)=>{
    //formula n*(n-1) of the even occurances in the range 
    //     let evenOcurrence = range/2
//     let sum = evenOcurrence*(evenOcurrence-1)
//     return sum
// }
// console.log(res(12))


// PRINT SQUERS OF 1-N
// function printSq(n){
//     for (let i = 1; i <= n; i++) {
//         arr.push(i*i) //i**e or Math.square(i) or Math.pow(i,2)
//     }
//     return arr
// }
// console.log(printSq(10));



// PRINT N NUMBERS DIVISIBLE BY 3 AND 5

// function divi(n){
//     for (let i = 1; i <= n; i++) {
//         if(i%3 === 0 && i%5 == 0) {
//             console.log(i);
//         }
//     }
// }
// console.log(divi(100));


// PRINT SUM OF N ODD NUMBERS

// function oddSum(n){
//     let sum = 0;
//     for (let i = 1; i <= n; i+=2) {
//         sum += i
//     }
//     return sum
    
// }
// console.log(oddSum(1))

// DSA O(1)
// function sumOddN(n){
    //formula n^2 of the odd occurances in the range
//     let occ = parseInt(n/2) 
//     let sum = occ**2
//     return sum

// }
// console.log(sumOddN(6));


// PRINT NUMBERS WHICH ARE EVEN AND PERFECT SQUARES
// function eveSq(n){
//     for (let i = 0; i <= n; i++) {
//         // if (i%2 === 0 && Math.sqrt(i) % 1 ===0) { 
//         // or
//         if(i%2 === 0 && Number.isInteger(Math.sqrt(i)) ){
//             console.log(i)
//         }
//     }
// } 
// eveSq(20)
