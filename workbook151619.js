// 15 Objects
// 15-1
var student = [
    firstName = "John",
    lastName = "Doe",
    age = 22,
    gpa = 4.0
]

var sentence = firstName + " " + lastName + " is " + age + " years old and has a " + gpa + " GPA.";

console.log(sentence);


// 15-2
var employee = [
    firstName = "Mark",
    lastName = "Jacob",
    age = 31,
    id = "A001234"
]

var word = sentence;
sentence  = "The new employee " + firstName + " " + lastName + " is " + age + " years old." + " The employee ID is " + id;

console.log(sentence);


// 15-3
var p2 = new Object();

p2.name = "Steve";
p2.age = 12;

console.dir(p2);


// 15-4
var toyataCorolla = new Object()

toyataCorolla.modeOne = "Sport";
toyataCorolla.modeTwo = "EV";
toyataCorolla.litre = 1.8;

console.dir(toyataCorolla);


// 15-5
var microsoft = new Object();

microsoft.laptop = "Surface Laptop 4";
microsoft.screenInches = 13.4;
microsoft.memoryGB = 16;
microsoft.batteryLifeHours = 19;
microsoft.processor = "Quad Core 11th Intel Core i7-1185G7 processor";

console.dir(microsoft);
console.log(microsoft.processor);


// 15-6
var pet = new Object();

pet.name = "Max";
pet.age = 6;
pet.type = "Guinea pig";
pet.lifeSpan = 8;

console.dir(pet);
console.log(pet.age);


// 15-7
var toyotaCorollaHybrid = new Object();

toyotaCorollaHybrid.mode = ["Sport","EV"];
    toyotaCorollaHybrid.litre = 1.8;
    toyotaCorollaHybrid.valve = 16;
    toyotaCorollaHybrid.cylinder = 4;

console.dir(toyotaCorollaHybrid);

var sentence = "The Toyota Corolla Hybrid is in " + toyotaCorollaHybrid.mode[0] + " mode and can carry up to " + toyotaCorollaHybrid.litre + " litres of gas.";

console.log(sentence);


// 15-8
var home = {};

home.pets = [
    petOne = {
        name: "Max",
        type: "guinea pig",
        age: 6,
        lifeSpan: 8
    },
    petTwo = {
        name: "Micky",
        type: "budgie",
        age: 4,
        lifeSpan: 8
    }
];

console.dir(home);
console.log("The second pet's name is " + petTwo.name +" and he is " + petTwo.age + " years old.");


// 15-9
var home = new Object();

home.textbooks = [
    textbookOne = {
        title: "Design Patterns Elements of Reusable Object-Oriented Software",
        authors: {"list": ["Erich Gamma","Richard Helm ","Ralph Johnson ","John Vissides"]},
        releaseDate: 1994,
    },
    textbookTwo = {
        title: "Step by Step",
        authors: {"list": ["Steve Suehring"]},
        releaseDate: 2010,
    }
];

console.dir(home.textbooks);
console.log(home.textbooks[0]);
console.log(home.textbooks[0]["authors"]);
console.log(home.textbooks[0]["authors"]["list"][1]);
console.log("I will read JavaScript " + home.textbooks[1]["title"] + ". The author of the textbook is " + home.textbooks[0]["authors"]["list"][0] +". It was released in " + home.textbooks[0]["releaseDate"] + ".");


// 15-10
var work = {
    title: "Software Developer",
    yearStarted: 2010
};

console.log(work.title); // Software Developer
console.log(work.information?.salary()); // undefined


// 15-11
var bag = {
    mirror: 1,
    keys: 5,
    id: "Bob Joe"
}

console.log(bag.mirror); // undefined
console.log(bag.wallet?.salary); // undefined


// 16 Arrow Function/ .Map Method
// 16-1
var container = [1,4,9,16];
var check = container.map(x => console.log(x));

/**
 * 1
 * 4
 * 9
 * 16
 */


// 16-2
var container = [1,4,9,16];
container.map(x => console.log(x * 2));

/**
 * 2
 * 8
 * 18
 * 32
 */


// 16-3
var electronics = ["keyboard","mouse","monitor"];
electronics.map(x => console.log(x));

/**
 * keyboard
 * mouse
 * monitor
 */


// 16-4
var caontainer = [1,4,9,16];
caontainer.map(function(x, index) {
    console.log("The number is " + x + ". Then index is " + index + ".");
});

/**
 * The number is 1. Then index is 0.
 * The number is 4. Then index is 1.
 * The number is 9. Then index is 2.
 * The number is 16. Then index is 3.
 */


// 16-5
var numbers = [1,2,3,4];
var filteredNumbers = numbers.map((value, index) => {
    if(index < 3) {
        return value;
    }
});

console.log(filteredNumbers); // [1,2,3,undefined]


// 16-6
var electronics = new Map();

electronics.set('laptop', 1000);
electronics.set('mouse', 5);
electronics.set('keyboard', 10);

console.log(electronics);
electronics.delete('keyboard');
console.log(electronics);


// 19 Switch
// 19-1
var number = 4;
var text = "";

switch(number) {
    case 4:
        text = "You guessed number " + number;
    break;
    case 2:
        text = "You guessed number " + number;
    break;
    default:
        text = "Try again next time!"
}

console.log(text);


// 19-2
var person = "Jim";
var text = "";

switch(person) {
    case "Peter":
        text = "You guessed " + person;
    break;
    case "Jim":
        text = "You guessed " + person;
    break;
    default:
        text = "Try again next time!"
};

console.log(text);


// 19-3
var text;

// 0 = Sunday,
// 1 = Monday,
// 2 = Tuesday,
// 3 = Wednesday,
// 4 = Thursday,
// 5 = Friday,
// 6 = Saturday

switch(new Date().getDay()) {
    case 4:
    case 5:
        text = "Soon it is the weekend."
    break;
    case 0:
    case 6:
        text = "It is the weekend."
    break;
    default:
        "I cannot wait to sleep in on the weekend"
};

console.log(text);


// 19-4
var light = 0;
var text;

switch(light) {
    case 0:
        text = "off";
    break;
    case 1:
        text = "on";
    break;
    default:
        text = "No value found";
};

console.log("The light is " + text);

