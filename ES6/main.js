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
let foo = ()=>{
    console.log("hello");
}
// 리턴 생략 가능, 함수가 한줄이고 리턴만 있으면 {} 생략 가능
let foo1 = ()=>"haha";
console.log(foo1());

// 하지만 => 이 문법에는 this를 사용할 수 없다!!
let age = 17;
let person = {
    name:"hello",
    age:20,
    getInfo:function(){
        console.log(this.age);
    }
}
// 만약 console.log안에 그냥 age이면 person.getInfo()는 전역변수를 들고와서 17이 나온다.
// 꼭 this.age를 해줘야함.
// this : 함수를 부르는 객체
// 화살표 함수는 this를 쓸 수 없다~!! this가 필요하다면 일반함수. 그런 경우가 아니라면 화살표함수 사용!