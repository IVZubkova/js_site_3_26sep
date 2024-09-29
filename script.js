var client = {
    first_name: "Pete",
    second_name: "Petrov",
    age: "28",
    email: "petr@gmail.comc"
};

console.log(client);
console.log("Имя, фамилия:", client.first_name, client.second_name)

client.phoneNumber = "+7 (985) 487 56 86";
client.phoneNumber = "+7 (985) 487 56 11";
console.log(client);

const someObject = {};
const someObject2 = new Object();

//конструктор объекта

function Car(brand, model, modification, releaseYear, color) {
    this.brandName = brand;
    this.modelName = model;
    this.modis = modification;
    this.year = releaseYear;
    this.color = color;   
}

var newCar = new Car("KIA", "Sportage", "none", 1995, "white");

console.log(newCar)

//циклы
for (let key in newCar){
    console.log(key + ":", newCar[key]);
}

function Cats(breed, eyecolor, weight, name){
    this.breedType = breed;
    this.colorOfEyes = eyecolor;
    this.bodyWeight = weight;
    this.chosenName = name;
    this.describe = function(){
        return "Breed: " + breed + " eyeColor: " + eyecolor + " weight: " + weight +  " name: " + name
    }
    this.jump = function(){
        console.log(name, "has jumped!")
    }
}

var newCat = new Cats("abissin", "blue", 33, "Kitty");
console.log(newCat.describe());
newCat.jump();

function add(a,b){
    return a + b;
}
function greet(name="friend"){
    console.log("Hello", name + "!")
    
}
greet("Bob");

greet();

// функции высшего порядка (в параметрах могут принимать любую функцию)

//function A(B){
//    let msg = "A";
//    msg += callback();
//    return msg;
//}

//function B(){
//    return "B";
//}

//console.log(A(B));

function greeting(name, callback){
    const greeting = "Hello " + name + "!";
    callback(greeting)
}

function printMsg(msg){
    console.log("Message:", msg)
}

greeting("Bob", printMsg)



const hello1 = () => "Hello world!"; //стрелочная функция, то же самое, что ниже

function hello2() {
    return "Hello2 world";
}

const square1 = (x) => x * x;

const addAndLog = (a, b) => {
    const result = a + b;
    console.log(result);
    return result;
}

addAndLog(3, 5)
console.log(hello2("Hello Marta"));
console.log(hello1);