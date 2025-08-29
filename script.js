let num;
let computer_num;
let i=0;
let arr;    //크기 5짜리 배열에 숫자 저장!
while(i<5){
    if(num<1 || num>100){
        console.log("Warning! Out of Bounds")
    }
    if(num<computer_num){
        console.log("Up!")
    }else if(num>computer_num){
        console.log("Down!")
    }else if(num==computer_num){
        console.log("That's right")
    } return 0;
    i++;
}

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("숫자를 공백으로 입력하세요: ", function (line) {
//     const arr = line.split(' ').map(Number);
//     console.log(arr);  // 👉 숫자 배열 출력
//     rl.close();
// });