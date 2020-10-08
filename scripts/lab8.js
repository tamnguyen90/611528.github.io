/* Exercise 1 */
String.prototype.filter = function(arr) {
    let self = this;
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
         self = self.replaceAll(element, "");
        
    }
    return self
}
const regex = /\ is\ /gi;
console.log("This house is not nice!".filter(['not',regex]));

/* Exercise 2 */
Array.prototype.bubbleSort = function() {

}

/* Exercise 3 */
function Person(name) {
    this.name = name;
}
Person.prototype.sayHi = function() {
    console.log('Hi.....')
}
function Teacher(name) {
    Person.call(this, name);
}
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.teach = function(subject) {
    console.log(this.name + ' is now teaching ' + subject);
}

const teacher = new Teacher('William');
teacher.sayHi();
teacher.teach('WAP');

const Person1 = {
    name: 'Default',
    setName: function(name) {
        this.name = name;
    }
}
const Teacher1 = Object.create(Person1);
Teacher1.teach = function(subject) {
    console.log(this.name + ' is now teaching ' + subject);
}

const william = Object.create(Teacher1);
william.setName('William');
william.teach('WAP');

/* Exercise 4 */
const person = {
    name: 'William',
    age: 20,
    greeting: function() {
        console.log('Greetings, my name is ' + this.name + ' and I\'m ' + this.age + ' years old.');
    },
    salute: function() {
        console.log('Good morning!, and in case I dont see you, good afternoon, good evening and good night!');
    }
};
const student = Object.create(person);
student.setMajor = function(major) {
    this.major = major;
}

student.greeting = function() {
    console.log('Hey, my name is ' + this.name + ' and I am studying ' + this.major);
}

const professor = Object.create(person);
professor.setDepartment = function(department) {
    this.department = department;
}
professor.greeting = function() {
    console.log('My name is ' + this.name + ' and I am in the ' + this.department + ' department.');
}

const s1 = Object.create(student);
s1.setMajor('CS');
s1.greeting();
s1.salute();

const p1 = Object.create(professor);
p1.setDepartment('Utopia');
p1.greeting();
p1.salute();
/*
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.greeting = function() {
    console.log(...)
}

Person.prototype.salute = function() {
    console.log(...)
}

const Student = function(name, age, major) {
    Person.call(this, name, age);
    this.major = major;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.greeting = function() {
    console.log(...)
}

function Professor(name, age, department) {
    Person.apply(this, [name, age]);
    this.department = department;
}

Professor.prototype = Object.create(Person.prototype);
Professor.prototype.greeting = function() {
    console.log(...);
}


*/