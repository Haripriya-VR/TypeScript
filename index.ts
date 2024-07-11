// Infer types (Implicit Types)

 let user = 'Debug Media'

//  Defining Types (Explicit types)

let userName : String  = 'hello'
let age : number = 7_89
let skills:String[] = ['Js','CSS','TS']
let num: Number[] = [1,2,3,4]
let Isnum :boolean= true
let EmptyArray:[] =[] // it expects empty array

// interface is a way to define the structure of an object.
// 

interface Details {
    name:string;
    age:number;
     salary?:number; //  optional property 
}

const userDetail:Details = {
    name:'max',
    age:45,
    salary:40000
}



userDetail.age =12

console.log(userDetail);





