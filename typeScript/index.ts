// const changeBtn = document.querySelector("#changeBtn")
// changeBtn?.addEventListener('click',()=>{
//     const getHi = document.querySelector("#hi") as Element;
//     getHi.textContent = 'Hello Changed';

// })

// let age = 40
// if(age> 50)
//     age += 10
// console.log(age)

// Primitive types in typescript
// let sales = 125_345_23;
// let course = "typescript"
// let is_pulished: boolean = true
// The any represent any kind of value; it any should be avoided
// let level;

// Arrays 
// let numbers : number[] = [1,4,3,'d'] 
// from the above code the array is stictly set to number so you can't assign any type apart from numbers
// let numbers:number[]=[1,2,3,4,]
// numbers.push(10)
// console.log(numbers)
 
// tuple
// A tuple is a fix length of array
// let user: [number,string] = [1,'Mama' ]

// enum
// I repersent a list of related constance
// const enum Size { Small =9,Medium,Large}
// let mySize: Size= Size.Medium
// console.log(mySize)

// functions
// function calculateTax(income:number):number{
//     return 0;
// }

const email = document.querySelector("#mail") as HTMLInputElement;
const submit = document.querySelector("#submit")
function validateMail(mailValue:HTMLInputElement){
    const check =  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    const result = check.test(mailValue.value)
    if(result === true){
        console.log("Hi")

    }else if(email.value === ""){
        console.log("This feild is required!!")
    }else{
        console.log("Please enter a valid email")
    }

}
submit?.addEventListener("click",()=>{
    validateMail(email)
})
// function checkEmail(emailValue:HTMLElement){

//     console.log(emailValue)
// }
// checkEmail(email)