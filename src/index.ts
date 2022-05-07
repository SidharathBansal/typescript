//Basic Types
let id: number = 90;
let company: string = "Sidharath Bansal";
let isPublished: boolean = true;
let x: any = "Hello";

let ids: number[] = [1, 2, 3, 4];
let arr: any[] = [1, true, "Hello"];

// Tuple
let person: [number, string, boolean] = [1, "Sid", true];
// Tuple Array
let employee: [number, string][];

employee = [
  [1, "Sid"],
  [1, "Sid"],
  [1, "Sid"],
];

// Union
let pid: string | number;
pid = "22";
pid = 22;

// Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

// Object
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "string",
};

// Type Assertion
let cid: any = 1;
// let  customerId = <number>cid
let customerId = cid as number;

// Functions
function addMun(x: number, y: number): number {
  return x + y;
}

// console.log(addMun(1, 2));

function log(message: string | number): void {
  console.log(message);
}

// log("hello")
// log(2 + 4)

// Interfaces
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
}

const user1: UserInterface = {
  id: 1,
  name: "John",
};

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x, y) => x - y;
// log(sub(2,5))

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

// Classes
class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`;
  }
}

const brad = new Person(1, "brad");
const mike = new Person(2, "mike");
