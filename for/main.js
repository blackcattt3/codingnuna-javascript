// let fruits = ["apple", "banana", "grape"];

// fruits.forEach((fruit)=>console.log(fruit));

// function printItem(item){
//     console.log(item);
// }
// fruits.forEach(printItem)

// fruits.forEach(function (item){
//     console.log(item)
// })

// fruits.forEach((item, index)=>console.log(item, index));
// 인덱스도 넣을수 있다!



// map
// let data = fruits.map((item)=>{
//     return item
// })
// console.log(data)
// map은 반드시 array를 리턴한다!
// map은 반드시 반환값이 있다.
// 특정 요소만도 출력 가능하다!

// let ceoList = [
//     {name:"Larry Page", age:23},
//     {name:"Tim Cook", age:40},
//     {name:"Elon Musk", age:55}
// ]

// let data = ceoList.map((item)=>{
//     return item.name
// })
// console.log(data);      // ['Larry Page', 'Tim Cook', 'Elon Musk']



// filter : 조건이 true인 값만 출력한다.
// let data = ceoList.filter((item)=>{
//     return item.age == 23
// })
// console.log(data); 

// let data = ceoList.some((item)=>{
//     return item.age == 25
// })
// console.log(data); 


// let data = ceoList.every((item)=>{
//     return item.age == 25
// })
// console.log(data); 


// let data = fruits.every((item)=>{
//     return item.startsWith("a")
// })
// console.log(data); 


// let data = fruits.findIndex((item)=>{
//     return item.startsWith("a")
// })
// console.log(data); 