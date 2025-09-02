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


let names = [
    "Steven Paul Jobs",
    "Bill Gates",
    "Mark Elliot Zuckerberg",
    "Elon Musk",
    "Jeff Bezos",
    "Warren Edward Buffett",
    "Larry Page",
    "Larry Ellison",
    "Tim Cook",
    "Lloyd Blankfein",
];

// map
// 1
// let data = names.map((item)=>{
//     return item.toUpperCase()
// })
// console.log(data);

// 2
// let data = names.map((item)=>{
//     return item.split(' ')[0]
// })
// console.log(data)

// 3
// let data = names.map((item)=>{
//     let items = item.split(' ');
//     // return items
//     // let result = "";
//     // 매 콜백요소마다 독립적으로 실행되어 새 배열에 계속 누적해서 모아준다.
//     let result = "";
//     items.forEach((init)=>{
//         result += init[0]});
//     return result
// })
// console.log(data);



// filter
// 1
// let data = names.filter((item)=>{
//     return item.includes("a")})
// console.log(data);
// let includeA = names.filter((item)=>item.includes('a'))
// console.log(includeA)

// 2
let data = names.filter((item)=>{
    let items = item.split();
    let result = '';
    items.forEach((a)=>{
        if(a==a+1){
            result+= items;
        }
    })
    return result
})
// let data = names.map((item)=>{
//     let items = item.split("");
//     return items;
// })
console.log(data);