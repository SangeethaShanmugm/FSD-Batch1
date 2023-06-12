function greet(name) {
  console.log(`Say Hi to ${name}`);
}

greet("Peter"); //Say Hi to Peter

//function
function greet(name, callback) {
  console.log(`Say Hi to ${name}`);
  callback();
}

//callback function
function CallMe() {
  console.log(" I am a callback function");
}

//pass func as an argument
greet("Peter", CallMe);

//Say Hi to Peter
//I am a callback function

function greet() {
  console.log("hello");
}

function Callme() {
  console.log(`Say Hi to ${name}`);
}

setTimeout(greet, 2000);
Callme("Peter");
//Say Hi to Peter
//hello

function greet(name, myFunction, func1) {
  console.log("Hello");
  myFunction(name);
  func1(name);
}

function first(name) {
  console.log("Hi my name is ${name}");
}
//callback func
function Callme(name) {
  console.log(`Say Hi to ${name}`);
}

//call func after 2 sec
setTimeout(greet, 2000, "Peter", Callme, first);
//Hello
// Say Hi to Peter
