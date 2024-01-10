// console.log(`Hello World`);
// console.log(`I like Pizza`);

// window.alert(`This is an alert`)
// window.alert(`I like pizza`)

// document.getElementById("myH1").textContent = `Hello`;
// document.getElementById("myP").textContent = `I like biryani!`;

//variables
// let x, y=123;
// x = 100;
// let age = 25, price = 10.99, gpa = 2.1;
// let name = "Srinivas";
// let online = true;
// console.log(x, y);
// console.log(typeof price, typeof name);
// console.log(`You are ${age} years old. The price is ${price} for one biryani. My gpa is ${gpa }`);

// let fullName = "Valluri Srinivas", age = 24, isStudent = false;
// document.getElementById("p1").textContent = `Your name is ${fullName}`
// document.getElementById("p2").textContent = `You are ${age} years old.`
// document.getElementById("p3").textContent = `Enrolled: ${isStudent}`

// Arithemetic +, -, *, /, **, % 
// let students = 30;
// students--;
// console.log(students);

//User Input 1.Window Prompt 2.Html Textbox
// let username;
// username = window.prompt("What is your username");
// console.log(username);

// let username;
// document.getElementById("mySubmit").onclick = function() {
//     username = document.getElementById("myText").value ;
//     document.getElementById("myH1").textContent = `Hello ${username}`;
//     console.log(username);
// }

//type conversion
// let age = window.prompt("How old are you?");
// age = Number(age)
// age+=1
// console.log(age, typeof age)

//constants
// let PI = 3.14159;
// let radius;
// let circumferance;

// document.getElementById("myButton").onclick = ()=>{
//     radius = Number(document.getElementById("myRadius").value);
//     circumferance = 2*PI*radius;
//     console.log(radius, circumferance);
//     document.getElementById("myH3").textContent=circumferance+" cm";
// }

//Counter
// let counter = 0;

// document.getElementById("decrease").onclick = () => {
//     counter-=1;
//     document.getElementById("counterValue").textContent = counter;
// }

// document.getElementById("reset").onclick = () => {
//     counter=0;
//     document.getElementById("counterValue").textContent = counter;
// }

// document.getElementById("increase").onclick = () => {
//     counter+=1;
//     document.getElementById("counterValue").textContent = counter;
// }

// console.log(Math.pow(10, 10000))

//Random Number generator

// const updateResult = document.getElementById("myButton").onclick = () => {
//     let randonNum = Math.random()
//     let diceResult = Math.ceil(randonNum*6)
//     document.getElementById("myLabel").textContent = diceResult
//     console.log(diceResult)
// }

// let age = 10;

// if (age>=18){
//     console.log("Adult")
// }
// else if (true) {
//     console.log("not Adult")
// }

// const input = document.getElementById("myText") ;
// const submit = document.getElementById("mySubmit") ;

// submit.onclick = () => {
//     document.getElementById("resultElement").textContent = input.value
// }

// const myCheckBox = document.getElementById("myCheck");
// const visaBtn = document.getElementById("visaBtn");
// const masterCardBtn = document.getElementById("masterCardBtn");
// const payPalBtn = document.getElementById("payPalBtn");
// const mySubmit = document.getElementById("mySubmit");
// const subResult = document.getElementById("subResult");
// const paymentResult = document.getElementById("paymentResult");

// mySubmit.onclick = function () {
//     if (myCheckBox.checked){
//         subResult.textContent = "Subbed"
//     }
//     else{
//         subResult.textContent = "Not Subbed"
//     }

//     if (visaBtn.checked){
//         paymentResult.textContent = "Visa Payment"
//     }
//     else if (masterCardBtn.checked){
//         paymentResult.textContent = "Master Payment"
//     }
//     else if (payPalBtn.checked){
//         paymentResult.textContent = "PayPal Payment"
//     }
// }

//Ternary Operator

// let age = 2;
// let message = age>=18? "Your an Adult" : "Your a Minor";
// console.log(message)

//Switch

// let day = 3;

// switch (day){
//     case 1:
//         console.log("Hello Monday");
//         break;
//     case 2:
//         console.log("Hello Tuesday");
//         break;
//     default:
//         console.log("Day is wrong")

// }

//String methods

// let username = "sri  ";
// let phone = "123-123"
// username = username.trim();
// console.log(username.charAt(0));
// console.log(username.indexOf("r"));
// console.log(username.lastIndexOf("i"));
// console.log(username.length);
// console.log(username.toUpperCase());
// console.log(username.toLowerCase());
// console.log(username.repeat(3));
// console.log(username.startsWith("s"));
// console.log(username.endsWith("s"));
// console.log(username.includes("sr"));
// console.log(phone.replace("-",''));
// console.log(phone.padStart(15, "0"));
// console.log(phone.padEnd(15, "0"));


//String slicing 
// const fullName = "Bro Code"
// let firstName = fullName.slice(0,3);
// console.log(firstName)


//method chainning
// let username = window.prompt("Enter Username")
// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase()
// console.log(username)

//Logical Operators && || !

//Strict Equallity === and !==

//while loop
// let username = "";

// while (true){
//     console.log("Hello sri");
//     break;
// }

//Functions
// function happyBirthday(num1, num2) {
//     return num1+num2
// }

// let answer = happyBirthday(5, 6);
// console.log(answer)

// const textBox = document.getElementById("textBox");
// const toFa = document.getElementById("toFa");
// const toCe = document.getElementById("toCe");
// const result = document.getElementById("result");

// let temp;

// function convert() {
//     if (toFa.checked){
//         temp = Number(textBox.value);
//         temp=temp*9/5+32
//         result.textContent = temp.toFixed(1)

//     }
//     else if (toCe.checked){
//         temp = Number(textBox.value);
//         temp=(temp-32)*(5/9)
//         result.textContent = temp.toFixed(1)
//     }
//     else {
//         result.textContent = "Select a Unit"
//     }
// }

//Array
// let fruits = ["app", "man"]

// fruits[1]="mango"
// fruits.push("banana")
// fruits.pop()
// fruits.unshift("Grape")
// fruits.shift("Grape")

// console.log(fruits)
// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits.length)
// console.log(fruits.indexOf("app"))

// console.log(...fruits)
// fruits.sort().reverse();
// for (let fruit of fruits){
//     console.log(fruit)
// }

//Spread operator ...
// let nameF = [1,2,3,4]
// console.log(Math.max(...nameF))
// console.log(Math.min(...nameF))

// let username = "Srinivas";
// let letters = [...username];
// console.log(letters)
// console.log(letters.join("-"))

//...rest Parameters
// function inFridge(...foods){
//     console.log(foods);
// }

// const food1 = "pizza1";
// const food2 = "pizza2";
// const food3 = "pizza3";
// const food4 = "pizza4";

// inFridge(food1, food2, food3);

//CallBack Functions
// hello(wait);

// function hello(callback) {
//     console.log("Hello");
//     callback();
// }

// function wait(){
//     console.log("wait")
// }

// function leave(){
//     console.log("leave")
// }

// function goodBye() {
//     console.log("Goodbye");
// }

// sum(displayPage, 5, 5);
// function sum(callback, x, y){
//     let result = x+y;
//     callback(result);
// }

// function displayConsole(result){
//     console.log(result);
// }

// function displayPage(result){
//     document.getElementById("myH1").textContent = result;
// }

//ForEach method: array.forEach(callback) -- element, index, array
// let numbers = [1,2,3,4,5];

// numbers.forEach(double);
// numbers.forEach(display);

// function double(element, index, array){
//     array[index] = element*2;
// }

// function display(element){
//     console.log(element);
// }

//Map() -> accepts a callback and applies that function to
//each element of an array, then return the new array.
// const numbers = [1,2,3,4,5];
// const squares = numbers.map((element) => Math.pow(element, 2));
// console.log(numbers);
// console.log(squares);


//filter() -> creates a new array by filtering out elements
// let numbers = [1,2,3,4,5,6,7];
// let areEven = numbers.filter(isEven);

// console.log(areEven);

// function isEven(element){
//     return element%2==0?true:false
// }

//Reduce -> reduces the element of an array to a single value.

// const prices = [1,2,4,5];
// const total = prices.reduce(getSum);
// console.log(total);

// function getSum(accumulator, element){
//     return accumulator+element;
// }

//Function expression
// const hello = function(){
//     console.log("Hello");
// }

// setTimeout(hello,2000);

// const numbers = [1,2,3,4,5];
// const squares = numbers.map((element)=> element**2)
// const cubes = numbers.map(function(element){return element**3})
// console.log(squares);
// console.log(cubes);

//Arrow Functions

// const hello = () => {
//     console.log("Hello")
//     console.log("Hello")
//     return "Sri"

// };

// let name = hello();
// console.log(name)

//Object -> A collection of related properties and/or methods
// object = {key:value,
//             function()}

// const person = {
//     firstName: "Spong",
//     age: 30,
//     sayHello: ()=> {console.log("Hello from sponge")}
// }

// person.sayHello()  

//this = reference to the object where THIS is used.

// const person1 = {
//     name: "Spongbob",
//     favFood: "Ham",
//     sayHello: function() {console.log(`I like ${this.favFood}`)}
// }

// person1.sayHello();

//Constructor = special method for defining the properties and methods of objects

// function Car(make, model, year, color){
//     this.make = make,
//     this.model = model,
//     this.year = year,
//     this.color = color
//     this.drive = function(){console.log(`You drive ${this.make} ${this.model}`)}
// }

// const car1 = new Car("BMW", "x7", "2023", "Jet-Black");
// const car2 = new Car("toyota", "supra", "2023", "Creme");
// const car3 = new Car("tesla", "truck", "2023", "Silver");
// console.log(car3);

//Classes - More standard way to work with classes
// class Product{
//     constructor(name, price){
//         this.name = name
//         this.price = price
//     }

//     displayProduct(){
//         console.log(`Product: ${this.name}`);
//         console.log(`Price: ${this.price} rupees`);
//     }

//     calculateTotal(salesTax){
//         return (this.price + this.price*salesTax).toFixed(2);
//     }

// }

// const salesTax = 0.05

// const shirt = new Product("Shirt", 2000);
// const pants = new Product("Pants", 3000);
// console.log(shirt.calculateTotal(salesTax));

//static - properties/methods that belong to class

// class MathUtil{
//     static PI = 3.14159;

//     static getDiamater(radius){
//         return radius*2;
//     }

//     getArea(radius){
//         return Math.PI * radius**2;
//     }
// }

// console.log(MathUtil.PI);
// console.log(MathUtil.getDiamater(10));
// let circle = new MathUtil();
// let area = circle.getArea(10);
// console.log(area)


//Inheritence - child can use parent properties
// class Animal{
//     alive = true;

//     eat(){
//         console.log(`This ${this.name} is eating`);
//     }

//     sleep(){
//         console.log(`This ${this.name} is sleeping`);
//     }
// }
// class Rabbit extends Animal{
//     name = "Rabbit";
// }
// class Fish extends Animal{
//     name = "Fish"
// }
// class Eagle extends Animal{
//     name = "Eagle"
// }
// const fish = new Fish();
// const hawk = new Eagle();

// fish.eat();
// console.log(fish.alive)
// console.log(fish.name)

//SUPER - keyword is used in classes to call the constructor/method/properties of a parent.
//this - THIS object
//super - parent

// class Animal{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }
// class Rabbit extends Animal{
//     constructor(name, age, runSpeed){
//         super(name, age);
//         this.runSpeed = runSpeed;
//     }
// }
// class Fish extends Animal{
//     constructor(name, age, swimSpeed){
//         super(name, age);
//         this.swimSpeed = swimSpeed;
//     }
// }
// class Hawk extends Animal{
//     constructor(name, age, flySpeed){
//         super(name, age);
//         this.flySpeed = flySpeed;
//     }
// }

// const rabbit = new Rabbit("Rabbit", 1, 10);
// const fish = new Fish("Fish", 1, 12);
// const hawk = new Hawk("Hawk", 1, 15);

// console.log(rabbit)

//Getters and Setters

// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     set name(newName){
//         if(typeof newName === "string" && newName.length>0){
//             this._name = newName;
//         }else {
//             throw new Error("Invalid Name")
//         }
//     }

//     get name(){
//         return this._name;
//     }
// }

// const person1 = new Person("Sri", 30);
// console.log(person1)

//Destructuring - []=array destructuring, {}=object destructuring

// let a=1, b=2;
// [a, b] = [b, a];
// console.log(a, b); 

// let person1 = {
//     firstName: "patrick",
//     lastName: "start",
//     age: 30,
//     job: "Fry Cook",
// }
// let person2 = {
//     firstName: "patrick",
//     lastName: "start",
//     age: 30,
// }
// const {firstName, lastName, age, job="Unemployed"} = person2;
// console.log(firstName, lastName, age, job)

//nested Objects

// class Person{
//     constructor(name, age, ...address){
//         this.name = name;
//         this.age = age;
//         this.address = new Address(...address);
//     }
// }

// class Address{
//     constructor(street, city, state){
//         this.street = street;
//         this.city = city;
//         this.state = state;
//     }
// }

// const person1 = new Person("Sri", 30, "street", "city", "state")
// console.log(person1)

//Array of Objects

//Sort 
// let arr = [1,2,3,4,5,0];
// arr.sort((a,b)=> b-a);
// console.log(arr);

// const people = [{name: "Spong", gpa: 3.0},
//                 {name: "ASpong", gpa: 2.0},
//                 {name: "ZSpong", gpa: 5.0}];

// people.sort((a,b)=> a.gpa-b.gpa);
// people.sort((a,b)=> b.name.localeCompare(a.name));
// console.log(people)

//Shuffle an Array (Fisher-Yates algo)
// const cards = ['A',2,3,4,5,6,7,8,9, 10, 'J', 'Q', "K"];
// shuffle(cards)
// console.log(cards)

// function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const random = Math.floor(Math.random()*(i+1));
//         [array[i], array[random]] = [array[random], array[i]];
//     }
// }

//Date
// const date = new Date();
// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDay();
// console.log(date)
// console.log(year, month, day)

//Closure - A function defined inside another function. Allows for private and state maintance.

// function outer(){
//     let msg = "Hello";
//     function inner(){
//         console.log(msg);
//     }
//     inner();
// }
// outer();

// function createCounter(){
//     let count = 0;
//     function increament(){
//         count++;
//         console.log(count);
//     }

//     function getCount(){
//         return count;
//     }
//     return {increament, getCount};
// }
// const counter = createCounter();
// counter.increament();
// counter.increament();
// counter.increament();
// console.log(counter.getCount());


//setTimeOut()

// setTimeout(()=> window.alert("Hello"), 2000)

//ES6 Module = An external file that contains reusable code.
// import {PI, getCir, getArea, getVolume} from './mathUtil.js';
// import E from './physicsUtils.js';

// console.log(PI)
// console.log(E)
// console.log(getCir(10))

//asynchronous: Handeled with Callbacks, Promises, Async/Await
// function func1(callback){
//     setTimeout(()=>{
//         console.log("func1");
//         callback();
//     }, 3000)
// }

// function func2(){
//     console.log("func2");
// }

// func1(func2);


//Error - uncaught error will inturut the code and exit in middle.
// try, catch, finally

// try{
//     console.log(x);
// }
// catch(err){
//     console.error(err);
// }
// finally{
//     console.log("In finally")
// }
// console.log("DONE")

//Callback Hell

// function walkDog(callback){
//     setTimeout(()=>{
//         console.log("You walk the dog")
//         callback();
//     }, 1500)
// }

// function cleanKitchen(callback){
//     setTimeout(()=>{
//         console.log("You clean kitchen")
//         callback();
//     }, 2500)
// }

// function takeOutTrash(callback){
//     setTimeout(()=>{
//         console.log("You take trash out")
//         callback();
//     }, 500)
// }

// walkDog(()=>{
//     cleanKitchen(()=>{
//         takeOutTrash(()=>{
//             console.log("You finished all the chores")
//         })
//     })
// })


//Promise - An object that manages async operations. Wrap promie object around async cocde.

// function walkDog(){
//     return new Promise((resolve, reject)=>{
//         let walkDog = true
//         setTimeout(()=>{
//             if (walkDog){
//                 resolve("You walk the dog");
//             }
//             else{
//                 reject("You didn't take dog to walk")
//             }
//         }, 1500)
//     })
// }

// function cleanKitchen(){
//     return new Promise((resolve, reject)=>{

//         setTimeout(()=>{
//             resolve("You clean kitchen")
//         }, 2500)
//     })
// }

// function takeOutTrash(callback){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>resolve("You take trash out"), 500)
//     })
// }

// walkDog().then(value=>{console.log(value); return cleanKitchen()})
//          .then(value=>{console.log(value); return takeOutTrash()})
//          .then(value=>{console.log(value); return console.log("DONE")})
//          .catch((err)=>console.log(err))

//Async and Await
//Async - makes a function return a promise
//Await - makes an async function wait for a promise

// function walkDog(){
//     return new Promise((resolve, reject)=>{
//         let walkDog = true
//         setTimeout(()=>{
//             if (walkDog){
//                 resolve("You walk the dog");
//             }
//             else{
//                 reject("You didn't take dog to walk")
//             }
//         }, 1500)
//     })
// }

// function cleanKitchen(){
//     return new Promise((resolve, reject)=>{

//         setTimeout(()=>{
//             resolve("You clean kitchen")
//         }, 2500)
//     })
// }

// function takeOutTrash(callback){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>resolve("You take trash out"), 500)
//     })
// }

// async function doChores() {

//     try{
//         const walkDogResult = await walkDog();
//         console.log(walkDogResult)

//         const cleanKitchenResult = await cleanKitchen();
//         console.log(cleanKitchenResult)

//         const takeOutTrashResult = await takeOutTrash();
//         console.log(takeOutTrashResult)

//         console.log("You Finished")
//     }
//     catch(err){
//         console.log(err)
//     }
    
// }

// doChores();

//DOM Element Selectors:

// const myHeading = document.getElementById("my-heading");
// myHeading.style.backgroundColor="yellow";
// myHeading.style.textAlign="center";
// console.log(myHeading)

// const fruits = document.getElementsByClassName("fruits")
// console.log(fruits)
// fruits[0].style.backgroundColor = "yellow"
// for (let fruit of fruits){
//     fruit.style.backgroundColor = "green"
// }

// Array.from(fruits).forEach(fruit=>fruit.style.textAlign = "center") //typecast fruits to arrays to use for each

// const h4Elements = document.getElementsByTagName("h4");

// console.log(h4Elements)
// console.log(h4Elements[0])

// const element = document.querySelector(".fruits");
// element.style.backgroundColor = "lightgreen";

// const fruits = document.querySelectorAll(".fruits");
// console.log(fruits)

//DOM Naigation 
// .firstElementChild

// const element = document.getElementById("fruits");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "yellow"


// .lastElementChild

// const element = document.getElementById("fruits");
// const lastChild = element.lastElementChild;
// lastChild.style.backgroundColor = "yellow"

// .nextElementSibling

// const element = document.getElementById("apple");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "yellow"

// .previousElementSibling

// const element = document.getElementById("orange");
// const previousSibling = element.previousElementSibling;
// previousSibling.style.backgroundColor = "yellow"

// .parentElement

// const element = document.getElementById("apple");
// const parent = element.parentElement;
// parent.style.backgroundColor = "yellow"

// .children

// const element = document.getElementById("fruits");
// const children = element.children;
// Array.from(children).forEach(element => {
//     element.style.backgroundColor="yellow"
// });

// //Add & Change HTML elements
// //step-1 Create element
// // const newH1 = document.createElement("h1");
// const newListItem = document.createElement("li");

// //step-2 Add attributes
// // newH1.textContent = "I like pizza!"
// // newH1.id = "myH1"
// // newH1.style.color = "tomato"
// // newH1.style.textAlign = "center"
// newListItem.textContent = "coconut";

// //step3 add to DOM
// // document.body.append(newH1)
// // document.body.prepend(newH1)
// // document.getElementById("box1").append(newH1)

// // const box2 = document.getElementById("box2");
// // document.body.insertBefore(newH1, box2)

// // const boxes = document.querySelectorAll(".box");
// // document.body.insertBefore(newH1, boxes[1])

// //Remove HTML
// // document.getElementById("box1").removeChild(newH1)
// document.getElementById("fruits").append(newListItem)

//Event Listeners
//MouseEvent
// const myBox = document.getElementById("myBox");

// function changeColor(event){
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "OUCH! 🐍";
// }

// myBox.addEventListener("click", changeColor)

// Key events

// const myBox = document.getElementById("myBox");
// document.addEventListener("keydown", event => {
//     myBox.textContent = "🧟‍♂️"
//     myBox.style.backgroundColor = "tomato"
// })

// document.addEventListener("keyup", event => {
//     myBox.textContent = "🐍"
//     myBox.style.backgroundColor = "lightblue"
// })

//NodeList - Static collection of HTML element by (id, class, element). created using querySelectorAll(). NodeList won't update automatically to reflect changes.

// let myButton = document.querySelectorAll(".myButtons")
// console.log(myButton)
// myButton.forEach(button=>{
//     button.style.backgroundColor = "lightgreen";
//     button.textContent+="🧟‍♂️";
// })
// myButton.forEach(button=>{
//     button.addEventListener("click", event=>{
//         if (event.target.style.backgroundColor === "tomato"){
//             event.target.style.backgroundColor = "lightgreen";
//             return;
//         }
//         event.target.style.backgroundColor = "tomato";
//     })
// })
// myButton.forEach(button=>{
//     button.addEventListener("mouseover", event=>{
//         if (event.target.style.backgroundColor === "tomato"){
//             event.target.style.backgroundColor = "lightgreen";
//             return;
//         }
//         event.target.style.backgroundColor = "tomato";
//     })
// })

//classList = interact with css classes. add(), remove(), toggle(), replace(), contains()

// const myButton = document.getElementById("myButton")
// myButton.classList.add("enabled");
// myButton.addEventListener("mouseover", event=>{
//     if (event.target.classList.contains("hover")){
//         event.target.classList.remove("hover")
//         return
//     }
//     event.target.classList.add("hover")
// })

//JSON {key: value} OR [{},{},{}] OR [val1, val2, val3]. 
//JSON.stringify() => convert a JS object to JSON string.
//JSON.parse() => convert a JSON string to JS object.
// const names = ["Spongebob", "Patrick", "Squidward"];
// const person = {
//     "name": "Spongebob",
//     "age": 30,
//     "gender": "male",
//     "hobbies": ["reading", "gaming", "cooking"]
// }
// const people = [{
//     "name": "Mario",
// 	"surname": "Rossi",
// 	"email": "XXXXXXXXXXXXXXXXXXXXX",
// 	"password": "XXXXXXXX"

// },{
//     "name": "Mario1",
// 	"surname": "Rossi1",
// 	"email": "XXXXXXXXXXXXXXXXXXXXX",
// 	"password": "XXXXXXXX"

// }]
// const jsonString = JSON.stringify(people);
// const jsObject = JSON.parse(jsonString)
// console.log(jsonString)
// console.log(jsObject)
// fetch("people.json")
//     .then(response=>response.json())
//     .then(values=>{
//         values.forEach(value=>{
//             console.log(value)
//             console.log("🧟‍♂️")
//         })
//     })
//     .catch(error => console.error(error))

//Fetch() - function used to making HTTP requests to fetch resources(JSON, images, files). fetch(url, {options})

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response=>{
//         if(!response.ok){
//             throw new Error("Could not fetch resourse")
//         }
//         return response.json();
//     })
//     .then(data=>console.log(data))
//     .catch(error=>console.error(error));as


// document.getElementById("myButton").onclick = fetchData;

async function fetchData(){
    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok){
            throw new Error("Resource not found");
        }
        const data = await response.json();
        console.log(data)
        const pokemonSprite = data.sprites.front_default;
        const image = document.getElementById("pokemonSprite");
        image.src = pokemonSprite
        image.style.display = "block"
    }
    catch(error){
        console.log(error);
    }
}
window.fetchData = fetchData;