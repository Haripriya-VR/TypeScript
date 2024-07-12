// Infer types (Implicit Types) : TypeScript uses type inferences to automatically deduce the type of variables , function return types and more . This makes the code cleaner and reduces the need for explicit type annotations.


 let user = 'Debug Media'

//  Defining Types (Explicit types)

let userName : String  = 'hello'
let age : number = 7_89
let skills:String[] = ['Js','CSS','TS']
let num: Number[] = [1,2,3,4]
let Isnum :boolean= true
let EmptyArray:[] =[] // it expects empty array

// interface is a way to define the structure of an object.
// it defines the properties , and the type of an object .initialisation is not possible in interface only declaration.

// interface Details {
//     name:string;
//     age:number;
//      salary?:number; //  optional property 
// }

// const userDetail:Details = {
//     name:'max',
//     age:45,
//     salary:40000
// }



// userDetail.age =12

// console.log(userDetail);

// // type alis is used to specify the name of the 

type Detail ={
    user:string;
    place:string;
}

const person:Detail ={
place:'kottakad',
user:'arathi'
}
// =================================================================================================================

// functions
//  the importance of specifying the type of the return value it will give out all the
// methods for the data type if it is string in the newValue it will give you the methods for that like toLowerCase llike that.

function getUserName(person:Detail):string{
    return person.user
}

// if nothing is returning the type can give as void in function.


const newValue = getUserName(person)

// ===================================================================================================================================



// union operator : Is used to combine multiple types into one . It allows a variable or parameter to accept values of more than one specific type.
// optional operator : The optional operator allows you to safely access the deeply nested properties of an object withour having to explicitly check if each reference in the chain is vaild

let myVar: string| number 

myVar = 'test'
myVar=0

// named types: the types that allows us to define new custom types 

type id = number | string

type stat = 'pending' | 'completed';

const statusType :stat = "completed"

let userid :id = '123ab'
// ==============================================================================================================================

// function overloading

//  It allow to define multiple function signatures for the same function name. This enables you to provide different parameters  and return the type based on the context.
// in which function called.

function add(num1:string,num2:string):string
function add(num1:number,num2:number):number

function add (num1:any,num2:any):any{
    return num1 + num2
}
add(2,2)
add('2','2')

// function overridding :It anables the subclass to give specific implementation for the method that is defined in the superclass.
class Animal {
    makeSound(): void {
        console.log("Some generic sound");
    }
}

class Dog extends Animal {
    // Overriding the makeSound method
    makeSound(): void {
        console.log("Woof! Woof!");
    }
}

const genericAnimal = new Animal();
const dog = new Dog();

genericAnimal.makeSound();  // Output: Some generic sound
dog.makeSound();            // Output: Woof! Woof!

// ====================================================================================================================

// Generics : In typscript allows to create reusable components that work with a variety of data types while providing complie time safety.
// They enable you to define functions, classes, and interfaces that can operate on different types without sacrificing the type-checking capabilities of TypeScript.

function getAge<T>(age :T):T{
    return age
}

getAge(22)

type userDetail ={
    name:string,
    age:number
}

type adminDetail={
    fullName:string,
    role:string
}

const UserDetails ={
    name:'abc',
    age:6
}

const adminDetails={
    fullName:'admin',
    role:'seller'
}

function getDetails <T>(Details:T):T{
    return Details
}

getDetails<userDetail>(UserDetails)
getDetails<adminDetail>(adminDetails)


// ===============================================================================================================

// enums : Is a way to create named constants .It groups the related values together and gives them meaningful names.

enum TrafficLight {
    Red,
    Yellow,
    Green
}

function getLightMessage(light: TrafficLight) {
    switch (light) {
        case TrafficLight.Red:
            return "Stop";
        case TrafficLight.Yellow:
            return "Caution";
        case TrafficLight.Green:
            return "Go";
    }
}

console.log(getLightMessage(TrafficLight.Red)); // Output: "Stop"
console.log(getLightMessage(TrafficLight.Green)); // Output: "Go"

// =============================================================================================


// const : Declares a variable whose binding cannot be reassigned .
// as const  assertion : Makes the content of an array or objecct completely immutable and infers the most specific type for the values. It enhances immutablity

// Step 1: Define a tuple with 'as const'
const directions = ["up", "down", "left", "right"] as const;
// 'directions' is now of type: readonly ["up", "down", "left", "right"]

// Step 2: Create a type that represents any element of the tuple
type Direction = typeof directions[number];
// 'typeof directions' is: readonly ["up", "down", "left", "right"]
// 'typeof directions[number]' extracts the union of all possible values in the array
// Therefore, 'Direction' becomes: 'up' | 'down' | 'left' | 'right'

// Step 3: Use the 'Direction' type in a function parameter
function move(direction: Direction) {
    // Function logic here
}

// Step 4: Call the function with a valid argument
move("up"); // Valid
// move("forward"); // Error: Argument of type '"forward"' is not assignable to parameter of type 'Direction'.


// =============================================================================================================

// assertion : type assertion in Typescript is a way to tell the compiler the variable should treated as a specific type.
// Tuples : are the special type of array that holds a fixed number of elements, each with a known type. 

let tuple: [string, number];
tuple = ["hello", 42]; // OK
// tuple = [42, "hello"]; // Error: Type 'number' is not assignable to type 'string'.

// ================================================================================================================


