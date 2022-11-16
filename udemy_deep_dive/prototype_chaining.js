//syntactic sugar is a simplified syntax which does not change the behavior under the hood.
//For example, the class keyword is syntactic sugar applied on prototype chaining and sharing of properties

class PersonClass {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greet(){
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    }
}

const personClass = new PersonClass('John', 'Doe');
personClass.greet();

class PoliceClass extends PersonClass {
    constructor(firstName, lastName, badge){
        super(firstName, lastName);
        this.badge = badge;
    }
}

const policeClass = new PoliceClass('Jane', 'Doe', 123);
policeClass.greet();
console.log('badge', policeClass.badge);
console.log('same proto',  policeClass.__proto__.__proto__ === personClass.__proto__)

//equivalent version using prototype under the hood
function PersonProto(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

PersonProto.prototype.greet =  function () {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
}

const personProto = new PersonProto('John', 'Smith');
personProto.greet();

function PoliceProto(firstName, lastName, badge){
    //use PoliceProto object as the current this to PersonProto with the call method
    //this allows access to the properties on PersonProto
    PersonProto.call(this, firstName, lastName);
    this.badge = badge;
}

//prototype chaining 
//Funtion.prototype is the prototype that will be assigned to object being created using the new keyword (e.g. new Function())
PoliceProto.prototype.__proto__ = PersonProto.prototype;

const policeProto = new PoliceProto('Jane', 'Smith', 456);
policeProto.greet();
console.log('badge', policeProto.badge);
console.log('same proto',  policeProto.__proto__.__proto__ === personProto.__proto__);
