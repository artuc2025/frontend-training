const person = {
    name: 'John',
    age: 30,
    greet: function (greeting) {
        console.log(`${greeting}, my name is ${this.name} and I'm ${this.age} years old.`);
    }
};


const anotherPerson = {
    name: 'Jane',
    age: 25
};

// Using call
person.greet.call(anotherPerson, 'Hello');


// Using apply


person.greet.apply(anotherPerson, ['Hi']);
// Using bind


const boundGreet = person.greet.bind(anotherPerson);
boundGreet('Hey');
// Using this


const greet = function (greeting) {
    console.log(`${greeting}, my name is ${this.name} and I'm ${this.age} years old.`);
};
const anotherGreet = greet.bind(anotherPerson);
anotherGreet('Hello');
