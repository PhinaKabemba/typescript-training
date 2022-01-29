var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
//let's create an instance
var myCustomer = new Customer("Phina", "Kabemba");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
/*
//let's create an instance
let myCustomer = new Customer();

myCustomer.firstName = "Phina";
myCustomer.lastName = "Kabemba";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
*/ 
