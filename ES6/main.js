// let name = "noona";
// let age = 17
// let person = {name, age};

// let bts={
//     name:"방탄소년단",
//     num:7
// }
// let nameValue = bts.name;
// let numValue = bts.num;
// console.log(nameValue, numValue);        // 이건 됌!

// let {nameValue, numValue} = bts;
// 객체 내의 변수이름과 {} 안의 변수 이름이 같아야만 매칭이 된다.
// console.log(nameValue, numValue);   // 이건 안됌.



// 배열
// let array = [1,2,3];
// let [a,...rest] = array;
// console.log(rest);
// a에만 저장하고 나머지는 rest로!

// let person = {
//     name : "person",
//     age : 19,
//     cute : true
// }
// let {name,...rest} = person
// console.log(name, rest);



// concat
// let a = [1,2];
// let b = [3,4];
// let c = [5,6];
// // let result = a.concat(b,c);
// // console.log(result);
// let result = [...a,...b,...c];
// // a,b,c에 있는 내용들 다 들고 오기(배열 복사해서 가지고 오기)
// console.log(result);



// 기존 함수 선언 방식
// function foo(){
//     console.log("hello");
// }

// 새로운 선언 방식
// let foo = ()=>{
//     console.log("hello");
// }
// // 리턴 생략 가능, 함수가 한줄이고 리턴만 있으면 {} 생략 가능
// let foo1 = ()=>"haha";
// console.log(foo1());

// // 하지만 => 이 문법에는 this를 사용할 수 없다!!
// let age = 17;
// let person = {
//     name:"hello",
//     age:20,
//     getInfo:function(){
//         console.log(this.age);
//     }
// }
// 만약 console.log안에 그냥 age이면 person.getInfo()는 전역변수를 들고와서 17이 나온다.
// 꼭 this.age를 해줘야함.
// this : 함수를 부르는 객체
// 화살표 함수는 this를 쓸 수 없다~!! this가 필요하다면 일반함수. 그런 경우가 아니라면 화살표함수 사용!





// ES6 Quiz!!

// 1.
// let store = {
//     name : "noonas's fuit store",
//     fruits : ["banana", "apple", "mango"],
//     address : "Seoul"
// }
// let {name, fruits,address} = store;
// console.log(store)

// let name="noona's fruit store"
// let fruits = ["banana","apple","mango"]
// let address="Seoul"
// let store={
//     name,
//     fruits,
//     address
// }
// console.log(store);


// // 2.
// console.log(`제 가게의 이름은 ${name} 입니다. 위치는 ${address} 에 있습니다.`)


// // 3.
// let calculate = (obj)=>`${obj.a}+${obj.b}+${obj.c}`
// console.log(calculate(1,2,3));

// function calculate(obj){
//     let {a,b,c}=obj
//     return a+b+c;
// }
// console.log(calculate({a:1,b:2,c:3}))



// 4.
// let name = "noona store";
// let fruits = ["banana", "apple", "mango"];
// let address = {
//     country:"Korea",
//     city:"Seoul"
// }
// function findStore(obj){
//     let {name, address:{city}} = obj;
//     return name==="noona store" && city === "Seoul"
// }
// console.log(findStore({name,fruits,address}));

// let { address } = obj;
// 👉 변수 address에 통째로 객체 { country: "...", city: "..." }가 들어감.

// let { address:{city} } = obj;
// 👉 address는 변수로 안 만들고, 그 안의 city만 꺼내서 변수 city를 만듦.

// address:{city} 에서 {}는 “address가 객체니까, 그 안을 또 구조 분해해서 city만 변수로 꺼내겠다”는 뜻.

// address.city 라고는 못 쓰는 이유는, 구조 분해 왼쪽은 “변수 선언”이기 때문에 . 연산자를 쓸 수 없어서 그래.




//5
// function getNumber(){
//     let array = [1,2,3,4,5,6]    // 여기서부터 바꾸시오
//     let [first,,third,forth] = array;
//     // return [first,third,forth]       순서 기반(index 기반) 자료구조(배열)
//     // [1, 3, 4]
//     return {first,third,forth}
//     // {first: 1, third: 3, forth: 4}   키(key)-값(value) 쌍의 집합(객체)
// }
// console.log(getNumber())




// 다시풀기
// 1.
// let name="noona's fruit store"
// let fruits = ["banana","apple","mango"]
// let address="Seoul"
// let store = {name, fruits, address};
// console.log(store);
// console.log(`${name}`);
// let address={
//     country:"Korea",
//     city:"Seoul"
// }

// 4
// let name="noona store"
// let fruits = ["banana","apple","mango"]
// let address={
//     country:"Korea",
//     city:"Seoul"
// }

// function findStore(obj){
//     let {name, address:{city}} = obj;
//     return name==="noona store" && city === "Seoul"
// }
// console.log(findStore({name,fruits,address}))


// 5
// function getNumber(){
//     let array = [1,2,3,4,5,6]    // 여기서부터 바꾸시오
//     let [first, ,third,forth] = array;
//     return {first,third,forth}
// }
// console.log(getNumber()) //  결과값 { first: 1, third: 3, forth: 4 }


// function getCalendar(first, ...rest) {
//     return (
//       first === "January" &&
//       rest[0] === "Febuary" &&
//       rest[1] === "March" &&
//       rest[2] === undefined
//     );
//   }
//   console.log(getCalendar("January", "Febuary", "March")); // 여기를 바꾸시오



//
// function getMinimum(){
//     let a= [45,23,78]
//     let b = [54,11,9]
//     return Math.min(...a,...b) // 여기를 바꾸시오
// }
// console.log(getMinimum())



// 
// function sumNumber() {
//     // 여기서부터 바꾸시오
//     const sum = (a,b)=>a+b;
//     return sum(40, 10);
//   }
// console.log(sumNumber());


function sumNumber(){
    const addNumber = (a)=>(b)=>(c)=>a+b+c;
    return addNumber(1)(2)(3)
}
console.log(sumNumber());