class Customer{

    firstName: string;
    lastName: string;

    constructor(theFirst: string, theLast: string){
        this.firstName = theFirst;
        this.lastName = theLast;
    }

}

//let's create an instance
let myCustomer = new Customer("Phina", "Kabemba");

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