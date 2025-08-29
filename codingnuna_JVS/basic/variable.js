// let color = "pink"     // let : 변수 선언. 변수명은 딱 하나만! unique
// let color2 = "black"
// color = black       //let을 안써주면 기존에 있던 변수값 변경 가능

// const password = "pink"     //const는 변수 고정! 변경 불가하다. 바뀌면 안되는것! 한번 할당하면 그 값이 영원히 간다.
// password = "black"

// var password = "pink"
// password = "black"     // var은 쓰지말기!




// // console.log(color, color2)
// console.log(password)

// let A = 30
// let B = 50
// let temp

// // temp = A
// // A = B
// // B = temp

// [A,B] = [B,A]
// console.log(A,B)

// === : 두 값의 값도 같고 타입도 같을때!
// == : 값이 같을때!! 느슨한 비교로 타입이 다르면 형변환을 시도한 뒤 값이 일치하는지 본다. 값만 비교!
// 자바스크립트에서는 정수와 실수를 따로 구분하지 않는다. 모든 숫자는 number 타입으로 처리된다.
// console.log(5 !== 5.0)      false  타입은 number로 갖고, 따라서 값도 5로 같다.

//console.log("true"==true)   false

// console.log(!false)

// var와 let의 차이
// var : 함수만 지역변수로 호이스팅이 되고 나머지는 전역변수로 올려버린다!
// let은 이런 var의 문제점을 보완해준다.



// 호이스팅이란?
//선언해둔 변수들을 자바스크립트 엔진에 미리 저장해두고 필요할때마다 불러쓰는 것
// 함수가 실행되기 전에 안에 있는 변수들을 범위의 최상단으로 끌어올리는 것


// includes : 아이템이 있는지 없는지 확인. 안에 그 값 포함하고 있는지 물어보는 함수. 결과값 : true/false
let fruit=["banana", "apple", "mango", "grape"]
fruit[0] = "cherry"
console.log(fruit)
console.log(fruit.includes("apple"))

// indexOf : 아이템의 인덱스 반환
console.log(fruit.indexOf("cherry"))

// slice : 해당값 이후의 값들을 모두 잘라냄. 잘린값들을 반환한다. 밑에서는 2 이후의 값들인 mango와 grape 반환
// slice는 기존의 배열을 건드리지 않는다.
console.log(fruit.slice(2))
console.log(fruit.slice(1,3))   //[ 'apple', 'mango' ]

// splice : (시작점,끝점)    시작점으로부터 몇개의 아이템을 제거하고 싶은지!
// 오리지널 파일을 바꾸고 싶을때
fruit.splice(2,1)
console.log(fruit)

console.log(fruit.pop())
console.log(fruit)