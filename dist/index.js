"use strict";
//Basic Types
let id = 90;
let company = "Sidharath Bansal";
let isPublished = true;
let x = "Hello";
let ids = [1, 2, 3, 4];
let arr = [1, true, "Hello"];
// Tuple
let person = [1, "Sid", true];
// Tuple Array
let employee;
employee = [
    [1, "Sid"],
    [1, "Sid"],
    [1, "Sid"],
];
// Union
let pid;
pid = "22";
pid = 22;
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: "string",
};
// Type Assertion
let cid = 1;
// let  customerId = <number>cid
let customerId = cid;
// Functions
function addMun(x, y) {
    return x + y;
}
// console.log(addMun(1, 2));
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "John",
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, "brad");
const mike = new Person(2, "mike");
