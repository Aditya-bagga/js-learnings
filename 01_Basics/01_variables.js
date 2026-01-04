const accountId = 144553
let accountEmail = "aditya.bagga@gmail.com"
var accountPassword="12345" //we dont use it now  
accountCity = "Yamunanagar"//not preffered at all but it can happen this way

let accountState; // input to be decided in future(undefined)

// accountId = 2 (not allowed)

accountEmail = "adi@gmail.com"
accountPassword="21212121"
accountCity = "Delhi"
console.log(accountId);

console.table([accountEmail,accountId,accountPassword,accountCity])

/*
prefer not to use var bcz of issue in block scope
and fucntional scope 
*/

