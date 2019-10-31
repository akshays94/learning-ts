// run command: tsc typing.ts & node typing.js  
var _a;
console.log('Typing');
/* STRINGS */
var aString;
aString = 'Akshay Suresh';
console.log('string', aString);
// aString = 25; // wont work
// console.log(aString);
var aNewLanguage = 'TypeScript';
var hours = 10;
var sentence = "I am learning " + aNewLanguage + " in " + (hours + 5) + " hours";
console.log('sentence', sentence);
/* BOOLEAN */
var isDone = false;
console.log('isDone', isDone);
if (!isDone) {
    console.log('Work not done');
}
/* NUMBERS */
// all is js, all nums are floating point values in TS
var decimal = 10;
console.log('decimal', decimal);
var decimal1 = 10.15;
console.log('decimal1', decimal1);
/* ARRAYS */
var numbers = [10, 11, 12];
console.log('numbers', numbers);
var numbers1 = [100, 200, 300];
console.log('numbers1', numbers);
/* 2d arrays */
var matrix = [[11, 12], [33, 44]];
console.log('matrix', matrix);
/* TUPLES */
var x = ["Akshay", 100, true];
console.log('tuple x', x, x[1]);
/* ENUMS */
var Directions;
(function (Directions) {
    Directions[Directions["NORTH"] = 0] = "NORTH";
    Directions[Directions["SOUTH"] = 1] = "SOUTH";
    Directions[Directions["EAST"] = 2] = "EAST";
    Directions[Directions["WEST"] = 3] = "WEST";
})(Directions || (Directions = {}));
;
var north = Directions.NORTH;
console.log(north); // prints 0
var west = Directions.WEST;
console.log(west); // prints 3
var DirectionsX;
(function (DirectionsX) {
    DirectionsX["NORTH"] = "northx";
    DirectionsX["SOUTH"] = "southx";
    DirectionsX["EAST"] = "eastx";
    DirectionsX["WEST"] = "westx";
})(DirectionsX || (DirectionsX = {}));
;
var south = DirectionsX.SOUTH;
console.log(south); // prints southx
/* ANY */
var notSure = "can be a string";
console.log('any notSure', notSure);
notSure = 10;
console.log('any notSure', notSure);
notSure = true;
console.log('any notSure', notSure);
var notSureList = ['Akshay', false];
console.log('notSureList', notSureList);
/* VOID: absense of having a type at all */
var unusable = undefined;
console.log('void unusable', unusable);
unusable = null;
console.log('void unusable', unusable);
// unusable = 100; // will raise error
// console.log('void unusable', unusable);
function printWarning() {
    console.log('function printWarning() is called');
}
printWarning();
/* NULL and UNDEFINED */
var u = undefined;
var n = null;
console.log('undefined', undefined);
console.log('null', null);
/* NEVER */
/* The never type represents the type of values that never occur. */
function logError(message) {
    throw new Error("Something went wrong: " + message);
}
/* object */
var student = {
    name: 'Akshay',
    marks: {
        physics: 100,
        maths: 200
    }
};
console.log('object student', student);
var student2 = null;
console.log('student2', student2); // works prints null
/* TYPE ASSERTIONS */
/* Sometimes you’ll end up in a situation where you’ll know more about a value than TypeScript does. Usually this will happen when you know the type of some entity could be more specific than its current type.

Type assertions are a way to tell the compiler “trust me, I know what I’m doing.” A type assertion is like a type cast in other languages, but performs no special checking or restructuring of data. It has no runtime impact, and is used purely by the compiler. TypeScript assumes that you, the programmer, have performed any special checks that you need. */
var aValue = "This is my new employee";
var lenOfEmp = aValue.length;
console.log('lenOfEmp', lenOfEmp);
var lenOfEmp1 = aValue.length + 10;
console.log('lenOfEmp1', lenOfEmp1);
/* =================================================== */
var a = 10;
// a = 'Akshay'; // error: str not assignable to number
console.log('a', a);
/* =================================================== */
/* ARRAY DESTRUCTURING */
var newNumbers = [1, 2, 3];
var firstNumber = newNumbers[0], secondNumber = newNumbers[1], thirdNumber = newNumbers[2];
console.log('firstNumber', firstNumber);
console.log('secondNumber', secondNumber);
console.log('thirdNumber', thirdNumber);
// SWAPPING NUMBERS
_a = [secondNumber, firstNumber], firstNumber = _a[0], secondNumber = _a[1];
console.log('firstNumber', firstNumber);
console.log('secondNumber', secondNumber);
console.log('thirdNumber', thirdNumber);
function foo(_a) {
    var firstNumber = _a[0], secondNumber = _a[1];
    console.log('foo firstNumber', firstNumber);
    console.log('foo secondNumber', secondNumber);
}
foo([1, 2]);
var _b = [100, 200, 300, 400], startingNum = _b[0], restNumbers = _b.slice(1);
console.log('startingNum', startingNum);
console.log('restNumbers', restNumbers);
// same for tuple destructing
// same for object destructuring
var employee = {
    name: 'Akshay Suresh',
    position: 'SDE-I',
    skills: ['js', 'ts', 'python']
};
console.log('employee', employee);
var skills = employee.skills;
console.log('skills', skills);
var employeeSkills = employee.skills;
console.log('employeeSkills', employeeSkills);
