const input=require("readline-sync")

//1. create the table from 2 to 10


// for (let i=1;i<=10;i++) {
//     store=""
//     for (let j=2;j<=10;j++) {
//         store = store + (i*j) + "\t"
//     }
//     console.log(store)
// }

// 2.how to console which values does not present in both the list?

// let arr1=[1,3,4,5,7,3]
// let arr2=[2,3,4,7]
// let arr3=[]
// for (let i of arr1) {
//     if (!arr2.includes(i)) {
//         arr3.push(i)
//     }
// }
// for (let i of arr2) {
//     if (!arr1.includes(i)) {
//         arr3.push(i)
//     }
// }
// console.log(arr3)

// output : [ 1, 5, 2 ]

// 3.console true if number is multiple of 2**n otherwise console false...

// let num=input.questionInt("Enter the number: ")
// count=0
// let i=1;
// let n=2;
// while (n<=num) {
    // if (num%n==0) {}
    // else {
        // count++
    // }
    // i++
    // n=2**i
// }
// if (count>=1) {
    // console.log(false)
// }
// else {
    // console.log(true)
// }



// 4. Remove duplicates from the array .

// let arr1=[1,4,5,3,4,5,6,5,7,9,10]
// let arr2=[]
// for (let i of arr1) {
//     count=0
//     for (let j of arr1) {
//         if (i==j) {
//             count++
//         }
//     }
//     if (count<2) {
//         arr2.push(i)
//     }
// }
// console.log(arr2)

// Output = [ 1, 3, 6, 7, 9, 10 ]


// 5. console the multiplication of all digit in a given array.

// let arr=[12345,45356,566554]
// for (let i of arr) {
//     mul=1
//     while (i>0) {
//         mul=mul*(i%10)
//         i=Math.floor(i/10)
//     }
//     console.log(mul)
// }

//output = 120
//        1800
//       18000


// 6. Reverse the number without using any datatype transformation?


// let num=input.questionInt("enter the number: ")
// let value=0
// while(num>0) {
//     value=value*10+(num%10)
//     num=Math.floor(num/10)
// }
// console.log(value)

// 7. fibonacci series 

// let num=input.questionInt("Enter the number : ")
// let a=0;
// let b=1;
// let c=0;
// for (let i=0;i<num;i++) {
//     console.log(c)
//     a=b
//     b=c
//     c=a+b
// }