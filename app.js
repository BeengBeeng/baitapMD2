// bai 1

// a = 2;
// var a;
// console.log(a); // in ra 2 vì biến đã đc xác định

// bài 2

// console.log(a);  // in ra  undefined
// var a = 2;

// bài 3
// var a = 10
// function foo() {
//     var a;
//     console.log(a);  // in ra  undefined
//     a = 2;
// }
// foo();

// bài 4

// foo();
// // var foo;
// function foo() {
//     console.log(1); // in ra 1
// }
// foo = function () {
//     console.log(2); // chưa đc thực thi
// }

// bài 5

// function removeEnd(arr, n) {
//     let newArr = arr.length - n;
//     arr.length = newArr;
//     return arr;
// }

// bai 6
//  Viết 1 chương trình xóa đi n phần tử cuối cùng của 1 array

// function first(arr, n) {
// cach 1
// arr.length = n;
// return arr;
// cach 2
// let reslut = [];
// for(let i =0;i<=n-1;i++){
//     reslut.push(arr[i]);
// }
// return reslut;
// cach 3

// return arr.splice(n, arr.length - n);
// }

// bai 7
//
// Sử dụng phương thức map() của array, tạo một array mới với các phần tử con ở trong có name nằm trong các thẻ h1, age nằm trong các thẻ h2

// const users = [
//     {
//         name: "Angelina Jolie",
//         age: 80

//     },
//     {
//         name: "Eric Jones",
//         age: 2

//     },
//     {
//         name: "Paris Hilton",
//         age: 5

//     },
//     {
//         name: "Kayne West",
//         age: 16

//     },
//     {
//         name: "Bob Ziroll",
//         age: 100

//     }
// ]
// let arr = users.map(function (item) {
//     return `<h1>${item.name}</h1>
//             <h2>${item.age}<h2>`
// })
// console.log(arr);

// bai 8

// let arr = users.map(function (item) {
//     return `${item.name}`;
// })
// console.log(arr);

// bai 9

// var x = "";

// one();
// function one() {
//     var y = x + x;
//     two();
//     function two() {
//         var z = y + x;
//         three();

//         function three() {
//             var t = x + y + z;
//             console.log(`1. x + y + z = ${t}`);
//             four()
//         }
//     }
// }

// bai 10
// Viết một hàm triple() trả về một số đã được nhân 3
// Sử dụng phương thức map của array, viết hàm multiply() nhận vào một mảng và trả về mảng mới với các số đã được nhân 3. Hàm triple sẽ xử lý tác vụ nhân 3 các số đó.

// function triple(num) {
//   return num * 3;
// }
// function mutiply(arr){
//     return arr.map(triple);
// }

// bai 11
// Sử dụng hàm filter của array. Viết một hàm nhận vào một mảng số ngẫu nhiên,
// hàm đó trả về một mảng mới chỉ chứa các phần tử lớn hơn 5

// bài 12
// Viết một hàm nhận đầu vào là mảng trên, sử dụng phương thức filter của array,
//  trả về một mảng mới chỉ chữa những phần tử object có gender là female

// var members = [
//   { name: "Lan", gender: "female" },
//   { name: "Linh", gender: "female" },
//   { name: "Trung", gender: "male" },
//   { name: "Peter", gender: "gay" },
// ];

// function filterMember(arr) {
//   return arr.filter(function (e, i) {
//     return e.gender === "female";
//   });
// }
// console.log(filterMember(members));

// bai 13

// let arr = [1, 2, 3, 4, 5];

// let reslut = arr.find(function (e, i) {
//   return e < 4;
// });

//

// bài 15

// Viết một hàm nhận vào một mảng ngẫu nhiên. Sử dụng phương thức reduce của array,
//  trả về object mới với các phần tử trong mảng là key, và
//   value sẽ là số lần xuất hiện của chúng ở trong mảng

// Input:
// countOccurrences(['a', 'b', 'c', 'b', 'a'])
// Expected output:
// { a: 2, b: 2, c: 1 };

// counting

// function countOccurrences(arr) {
//   let arr = ["a", "b", "c", "b", "a"];
//   let reslut = {};
//   for (let i = 0; i <= arr.length - 1; i++) {
//     let element = arr[i];
//     if (!reslut[element]) {
//       reslut[element] = 1;
//     } else {
//       reslut[element] = reslut[element] + 1;
//     }
//   }
//   return reslut;
// }
// countOccurrences(arr);
// countOccurrences(["a", "a", "c"]);

// cach 2
// let arr = ["a", "b", "c", "b", "a"];
// let result = arr.reduce(function (previousValue, currentValue) {
//   if (!previousValue[currentValue]) {
//     previousValue[currentValue] = 1;
//   } else {
//     previousValue[currentValue] = previousValue[currentValue] + 1;
//   }
//   return previousValue;
// }, {});
// console.log(result);

// bai 16       .concat     (dung de noi mang)

// function flatteraArr(arr) {
//   return arr.reduce(function (pre, cur) {
//     for (let i = 0; i <= cur.length - 1; i++) {
//       pre.push(cur[i]);
//     }
//     return pre;
//   }, []);
// }

// let reslut = flatteraArr([
//   [1, 2, 3],
//   [4, 5],
// ]);
// console.log(reslut);

// return [...pre, ...cur]; // dùng để nối mảng hoặc object ( spread operator)

// bai 17
// Viết một hàm nhận vào một mảng số gồm 2 số.
//  Tính tổng của các số tự nhiên trong khoảng 2 số đó

// bai 18 Viết một hàm nhận vào 2 mảng số,
// so sánh 2 mảng và trả về một mảng mới chứa các phần tử độc nhất giữa 2 mảng. Chú ý sử dụng hàm filter

// function diff(arr1, arr2) {
//   // Lọc những phần tử ở trong arr1 chưa tòn tại trong arr2
//   let reslut1 = arr1.filter(function (e, i) {
//     return arr2.index0f(e) === -1;
//   });
//   // Lọc những phần tử ở trong arr1 chưa tòn tại trong arr1
//   let reslut2 = arr2.filter(function (e, i) {
//     return arr1.index0f(e) === -1;
//   });
//   // Nối 2 mảng result lại và return
//   return reslut1.concat(reslut2);
// }
// let reslut = diff([1, 2, 3, 4], [1, 2, 1]);
// console.log(reslut);

// bai 19
// Viết một hàm nhận vào 1 số n, tính tổng các số lẻ của dãy fibonacci nhỏ hơn số n
// Lưu ý: Dãy fibonacci bắt đầu từ 1 (1, 1, 2, 3, 5, 8….)

// function sumFib(n) {
//   let num1 = 1;
//   let num2 = 1;
//   let temp;
//   let result = [];
//   for (let i = 1; i <= n; i++) {
//     if (num1 <= n) {
//       result.push(num1);
//     }
//     temp = num1;
//     num1 = num2;
//     num2 = temp + num2;
//   }
// }
// let sum = 0;
// for (let e of result) {
//   if (e % 2 === 1) {
//     sum = sum + e;
//   }
//   return sum;
// }
// console.log(sumFib(n));

// bai 20
// Viết một hàm nhận vào 1 đoạn mã nhị phân. Convert đoạn mã nhị phân đó thành tiếng người :))

// bai 21
// Viết một hàm nhận vào 2 hoặc nhiều mảng,
//  trả về một mảng mới chứa các phần tử không trùng lặp trong các mảng truyền vào

// function flatternArr(arr) {
//   return arr.reduce(function (pre, cur) {
//     return [...pre, ...cur];
//   });
// }

// function uniqueArray() {
//   let result = [];
//   for (let i = 0; i <= arguments.length - 1; i++) {
//     // console.log(arguments[i]);
//     result.push(arguments[i]);
//   }
//   result = flatternArr(result);
//   return result.filter(function (e, i) {
//     return result.indexOf(e) === i;
//   });
// }

// let result = uniqueArray([1, 2, 3, 3], [3, 4, 5, 6], [3, 7, 8, 9]);
// console.log(result);
