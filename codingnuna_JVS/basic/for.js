// for (let i=1;i<10;i++){
//     for (let j=1;j<10;j++){
//         console.log(i+"*"+j+""+i*j)
//     }
// }


//01
// let answer=0;
// for(let i=1;i<101;i++){
//     answer += i
// }
// console.log(answer)

//02
// let answer = 0;
// for(let i=1;i<100;i+=2){
//     answer+=i;
// }
// console.log(answer);


//3
// C와 다르게 / 하면 float 형태로 계산된다. 파이썬과 유사!
// 몫 구하고싶으면 Math.floor(i/10) 이렇게 써야함
// for(let i=1;i<51;i++){
//     if(i<10){
//         if(i%3==0){
//             //한자리수이면서 3의 배수
//             console.log("짝")
//         }else{
//             console.log(i)
//         }
//     }else if(Math.floor(i/10)==3){
//         //30~39
//         if(i%10==0 || i%10==3 || i%10==6 || i%10==9){
//             console.log("짝짝")
//         }else{
//             console.log("짝")
//         }
//     }else{
//         //그 외의 수들
//         if(i%10==3 || i%10==6 || i%10==9){
//             console.log("짝")
//         }else{
//             console.log(i)
//         }
//     }
// }


//5
// let num = 13;
// flag = true;
// for(let i=2;i<num;i++){
//     if(num%i==0){
//         flag=false;
//         break;
//     }
// }
// console.log(flag)


// for(let i=1;i<=50;i++){
//     let stringValue = i.toString() // 숫자 타입을 string 타입으로 바꾸는 함수 
//     let result = ""
//     for(let j=0;j<stringValue.length;j++){
//       if(stringValue[j] == "3" ||stringValue[j] == "6" ||stringValue[j] == "9" ){
//         result+="짝"
//       }
//     }
//     console.log(result.length>0?result:i)
// }



// for(let i=1;i<51;i++){
//     let num = i.toString()
//     let result = ""
//     for(let j=0;j<num.length;j++){
//         if(num[j]==3 || num[j]==6 || num[j]==9){
//             result += "짝"
//         }
//     }
//     if(result==""){
//         result = i
//     }
//     console.log(result)
// }


// for(let i=1;i<51;i++){
//     let num = i.toString()
//     let result = ""
//     for(let j=0;j<num.length;j++){
//         if(num[j]==3 || num[j]==6 || num[j]==9){
//             result += "짝"
//         }
//     }
//     console.log(result==""?i:result)
// }

// 숫자 -> 문자열 바꾸는 함수 : if.toString()


// let fruit = ["apple", "banana", "pineapple", "mango"];
// //for...of
// for(let item of fruit){
//     console.log(item)
// }


// let person={
//     name : "누나",
//     age : 25,
//     cute : true,
// }
// //for...in -> 키값을 불러오고 싶을때
// for (let key in person){
//     console.log("key :", key)
//     if(key==="cute"){
//         console.log("누나는 귀엽니?", person[key])  //이때 person.key 하면 undefined 나옴! if문에 key가 string 타입이라 그런듯.
//     }
// }
// 배열의 key 값은 인덱스이다!

let num = 39;
let answer = true;
if(num == 2){
    answer = false;
}else{
    for(let i=2;i<num;i++){
        if(num%i==0){
            answer = false
        }
    }
}
console.log(answer);

