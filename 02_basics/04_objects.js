//const tinderUser = new object() //singleton
const tinderUser = {}//non singleton
tinderUser.id = "123abc"
tinderUser.name= "Ajeet"
tinderUser.isLoggedIn= false

//console.log(tinderUser);


const regularUser = {
    email:"ajeet28376@google.com",
    fullname:{
        userFullname:{
            firstname:"Ajeet",
            lastname:"singh",
        }
    }
}

//console.log (regularUser.fullname.userFullname.lastname);

const obj1 ={1: "a", 2:"b"}
const obj2 ={3: "c", 4: "d"}

//const obj3 ={ obj1 , obj2}
//const obj3 = Object.assign ({},obj1, obj2)


const obj3 = {...obj1,...obj2}
//console.log(obj3);


const users = [
    {
        id:1,
        email:"ajeeet23323@gmail.com"
    },
    {
        id:1,
        email:"ajeeet23323@gmail.com"
    },
    {
        id:1,
        email:"ajeeet23323@gmail.com"
    },
]

users[1].email

console.log (tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));






// 02_basics/04_objects.js