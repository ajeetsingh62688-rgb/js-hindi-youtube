// premitive data types


// 7 types : String,Number, Boolean,null,undefined,symbol,BigInt

const score =100
const ScoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol("123")
const anotherId = Symbol("123")

const bigNumber = 3245488587637853768536875n
console.log(typeof bigNumber);

// Reference (non-premitive)
// Array,object,Function

const heros =["shaktiman","naagraj","doga"];
let myObj = {
    name: "Ajeet",
    age:22,

}

const myFunction = function(){
    console.log ("hello world");
}

