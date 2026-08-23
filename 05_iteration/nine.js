const myNums =[1,2,3]

//  const myTotal = myNums.reduce(function(accumulator, currentValue){
//     console.log(`Accumulator is ${accumulator} and currentValue is ${currentValue}`);
//     return accumulator + currentValue
//  }, 0)


const myTotal = myNums.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
// console.log(myTotal);






 const shoppingCart = [
    {
        itemName : "laptop",
        itemPrice : 1000
    },
    {
        itemName : "mobile",
        itemPrice : 500
    },
    {
        itemName : "tablet",
        itemPrice : 750
    }
 ]

 const totalPrice = shoppingCart.reduce((accumulator, item) => accumulator + item.itemPrice, 0)
 console.log(totalPrice);   