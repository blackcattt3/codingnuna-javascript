let patient = {
    name : "jimin",
    age : 17,
    disease : "cold"
}

console.log(patient)
console.log(patient.age)
console.log(patient["age"])

patient.name = "JK"
console.log(patient)

let patient_list = [{name:"jimin", age:13}, {name:"RM", age:35}, {name:"V", age:28}]
console.log("첫번째 환자는:", patient_list[0])
console.log("첫번째 환자의 나이는:", patient_list[0].age)
console.log("첫번째 환자의 나이는:", patient_list[0]["age"])