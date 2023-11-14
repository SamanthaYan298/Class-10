// Objects
// example 1:

var basket = {
    madeOutOf: "wood",
    built: 1990,
    color: "orange"
}

console.log(basket.built);

// example 2: another way how we gonna call the object

var basket = {
    madeOutOf: "wood",
    built: 1990,
    color: "orange"
}

console.log(basket["built"]);

// example 3: another way how you can set up a brand new object

var basket = new Object();

console.log(basket);

basket.madeOutOf    = "wood";
basket.built        = 1990;
basket.color        = "orange";

console.log(basket); 

// example 4: another way how we can initialize an empty object

var basket = {};

basket.madeOutOf    = "wood";
basket.built        = 1990;
basket.color        = "orange";

console.log(basket);

// example 5: add a function inside an object

var person = {
    firstName   : "Ken",
    lastName    : "Fred",
    id          : 12345,
    fullName    : function() {
        return this.firstName + " " + this.lastName
    },
    Worker      : function() {
        return "My name is " + this.firstName + " and my id is " + this.id; 
    }
}

console.log(person.firstName);
console.log(person.fullName());
console.log(person.Worker());

// example 6: utilize objects we set up with the functions

var human = function(){
    return `I am ${this.age} years old`;
}

var personOne = {
    eyes: "blue",
    age: 30,
    human: human
}

console.log(personOne.eyes);
console.log(personOne.human);
console.log(personOne.human());




// Switch
// example 1
/** initialise the variable number to the value of 10
* setup a switch statement that takes number as the expression
* setup a case that checks for 0.
* if it is true then console log out: fail
* setup a case that checks for 5.
* if it is true then console log out: Too low.
* setup a case that checks for 10.
* if it is true then console log out: You guessed right.
* setup a default that will console log the word: No
* setup a break where needed in the switch statement.
*/

var number = 10;

switch(number) {
    case 0:
        console.log("Fail");
        break;
    case 5:
        console.log("Too low.");
        break;
    case 10:
        console.log("You guessed right.");
        break;
    default:
        console.log("No")
};

// example 2
/**
 * initialise the variable fruit to the value of apple
 * initialise the variable sentence to an empty string
 * 
 * create a switch statement that takes the expression of fruit
 * add the following cases
 * case if orange. if it is true assign sentence to: I will make orange juice
 * case if apple. if it is true assign sentence to: Make apple pie.
 * then default sentence to: Order food.
 * write a single line comment as to what will be displayed.
 * console log out sentence
 */

var fruit = "apple";
var sentence ="";

switch(fruit) {
    case "orange":
        sentence = "I will make orange juice.";
        break;
    case "apple":
        sentence = "Make apple pie.";
        break;
    default:
        sentence = "Order food.";
} 

console.log(sentence); // Make apple pie.



// Arrow Function 1: map functionality

var newArray = [1,2,3,4];

var callingMap = newArray.map(
        x => x * 2
    );

console.log(callingMap);

// Arrow Function 2:

var arrayOne = [1,2,5,7];

arrayOne.map(
    y => console.log(y * 2)
);

// Arrow Function 3:

var arrayOne = [1,2,3,4];

arrayOne.map(
    (x, index) => console.log("The number is " + x + " and the index is " + index)
    );

// Arrow Function 4:

var arrayOne = [1,2,3,4];

arrayOne.map((x, index, array) => {
    console.log(x);
    console.log(index);
    console.log(array);
    console.log("---");
});

// // Arrow Function 5:

var arrayOne = [10,20,30,40];

arrayOne.map(function(z, index) {
    console.log(index + ":" + z);
});

// example in class

var values = [20, 30, 40];

values.map((itemTest, index) => console.log("The values " + itemTest + " is at index " + index));
// have to keep item and index in the order

//.set - refers to the key values pair stuff