function SayMyName(){
    console.log("A");
    console.log("J");
    console.log("E");
    console.log("E");
    console.log("T");
}
//SayMyName();

// function addTwonumbers(num1,num2){
//     console.log(num1 + num2);
// }
// const result = addTwonumbers(5, 3);

function addTwonumbers(num1,num2){
    // let result = num1 + num2;
    // return result
    return num1 + num2
}
const result = addTwonumbers(5, 3);

// console.log("Result: ",result); 



function loginUserMessage(username){
    // if(username === undefined){
    if(!username){
        console.log("Please enter a username");
        return

    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("ajeet"));
//console.log(loginUserMessage())




function loginUserMessage(username="ajeeet"){
    // if(username === undefined){
    if(!username){
        console.log("Please enter a username");
        return

    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("shiva"))




function calculatecartPrice(...num1){
    return num1
}

//console.log(calculatecartPrice(5, 3,4));



const user = {
    username: "ajeet",
    price: 999
};

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user);

handleObject({
    username: "shiva",
    price: 1000
});

const myNewArray = [1, 2, 3, 4, 5];

function returnSecondvalue(getArray) {
    return getArray[1]
}
//console.log(returnSecondvalue(myNewArray));
console.log(returnSecondvalue([1,2,3,4,5]));