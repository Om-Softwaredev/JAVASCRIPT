const accountId=1122335544;
let accountEmail="omprakash@google.com"
var accountPassword=114477;
accountCity="Siwan";

let accountName;// undefined

// accountId=114455 //Re-Assignment to constant variable is not allowed.

console.log(accountId)
accountEmail="op@op.com"
accountPassword=79585
accountCity="Hyderabad"
/*
prefer not to use var 
because of issue in block and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountName])