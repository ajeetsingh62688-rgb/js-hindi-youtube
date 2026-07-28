const acountId = 144553
let accountEmail = "ajeetsingh@gmail.com"
var accountPassword = "12345"
accountcity ="jaipur"

// accountId =2 not allowed because it is a constant variable
accountEmail = "jshshsjnjqn@gmail.com"
accountPassword = "98765678"
accountcity = "delhi"
let accountState ;


console.log(acountId)

/*
prefer not to use var because of issue in block scope and functional scope
 */
console.table({accountEmail, accountPassword, accountcity,accountState})