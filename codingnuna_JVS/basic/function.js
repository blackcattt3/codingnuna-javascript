//1
function greet(name){
    console.log("안녕 내 이름은",name+"야")
}
greet("제시카")

//2
function meetAt(year, month="", date=""){
    if(month=="" && date==""){
        console.log(year+"년");
    }else if(month!="" && date==""){
        console.log(year+"년 "+month+"월");
    }else{
        console.log(year+"/"+month+"/"+date)
    }
}
meetAt(2025)        //2025년
meetAt(2032, 3)     //2032년 3월
meetAt(2025,6, 21)  //2025/6/21


//3
function findSmallestElement(arr){
    
    if(arr=='\0'){
        console.log(0);
    }else{
        let min=arr[0];
        for(let i=0;i<arr.length;i++){
            if(arr[i]<min){
                min = arr[i]
            }
        }
        console.log(min)
    }
}
findSmallestElement([100,200,3,0,2,1])


//4
function change(num){
    console.log("50000 X",Math.floor(num/50000))
    num%=50000
    console.log("10000 X",Math.floor(num/10000))
    num%=10000
    console.log("5000 X",Math.floor(num/5000))
    num%=5000
    console.log("1000 X",Math.floor(num/1000))
    num%=1000
    console.log("500 X",Math.floor(num/500))
    num%=500
    console.log("100 X",Math.floor(num/100))
    num%=100
}
change(12300)



//
let unit = [50000,10000,5000,1000,500,100]
function changeCalculate(money){
    for(let i=0;i<unit.length;i++){
        let number = Math.floor(money/unit[i])
        console.log(unit[i]+"X"+number)
        money = money-[unit[i]*number]
    }
}
changeCalculate(12300)


function meetAt(year, month, date) {
    if (date) {
      return `${year}/${month}/${date}`;
    }
    if (month) {
      return `${year}년 ${month}월`;
    }
    if (year) {
      return `${year}년`;
    }
  }
console.log(meetAt(2022,1,7))
// 백틱 : option+₩(`)
// 영어자판에서는 ` 나오고 한글자판에서는 ₩ 나온다!
//`${year}년` 이것처럼 다이나믹한 값도 같이 쓸수 있다