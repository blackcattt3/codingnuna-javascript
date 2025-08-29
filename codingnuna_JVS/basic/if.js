// if(true){
//     console.log("조건은 참입니다")
// } else{
//     console.log("거짓입니다")
// }

// let age = 21

// if(age > 20){
//     console.log("운전이 가능합니다")
// }
// else if(age >= 18){
//     console.log("오토바이 운전이 가능합니다")
// }
// else {
//     console.log("운전이 불가능합니다")
// }

// if(age >= 18){
//     console.log("오토바이 운전이 가능합니다")
// }
// else if(age > 20){
//     console.log("운전이 가능합니다")
// }
// else {
//     console.log("운전이 불가능합니다")
// }

// if문에서 여러 조건을 만족하여도 첫번째 if문 조건에 해당하는 값을 출력한뒤에는 그 뒤가 참이어도 실행하지 않고 종료된다.
// 따라서 범위를 작은것 -> 큰것으로 가야한다!

// 조건 여러개일때 && 연산자 꼭 써주기!!

// let age = 21
// let license = true

// if (age > 20){
//     if (license == true){
//         console.log("운전이 가능합니다")
//     }
//     else{
//         console.log("면허를 따세요")
//     }
// }
// else{
//     console.log("운전이 불가능합니다")
// }



// quiz

// let num = prompt("숫자를 입력하세요 : ");
// if(num > 0){
//     console.log("양수입니다");
// } else if(num < 0){
//     console.log("음수입니다");
// } else{
//     console.log("0입니다");
// }

let a = [1,2,3,4,5]
console.log(a.includes(1) && a.includes(2))
//a.includes(1, 2);  1이라는 값이 2번 인덱스에 존재하는지