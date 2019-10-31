
// run command: tsc typing.ts & node typing.js  

console.log('Typing');

/* STRINGS */
let aString: string;
aString = 'Akshay Suresh';
console.log('string', aString);

// aString = 25; // wont work
// console.log(aString);

let aNewLanguage: string = 'TypeScript';
let hours: number = 10;
let sentence: string = `I am learning ${aNewLanguage} in ${hours + 5} hours`;
console.log('sentence', sentence);

/* BOOLEAN */
let isDone: boolean = false;
console.log('isDone', isDone);

if (!isDone) {
	console.log('Work not done');
}


/* NUMBERS */
// all is js, all nums are floating point values in TS
let decimal: number = 10;
console.log('decimal', decimal);

let decimal1: number = 10.15;
console.log('decimal1', decimal1);


/* ARRAYS */
let numbers: number[] = [10, 11, 12];
console.log('numbers', numbers);

let numbers1: Array<number> = [100, 200, 300];
console.log('numbers1', numbers);

/* 2d arrays */
let matrix: number[][] = [[11, 12], [33, 44]];
console.log('matrix', matrix);


/* TUPLES */
let x: [string, number, boolean] = ["Akshay", 100, true];
console.log('tuple x', x, x[1]);


/* ENUMS */
enum Directions { NORTH, SOUTH, EAST, WEST };

let north: Directions = Directions.NORTH;
console.log(north); // prints 0

let west: Directions = Directions.WEST;
console.log(west); // prints 3

enum DirectionsX { 
	NORTH='northx', 
	SOUTH='southx', 
	EAST='eastx', 
	WEST='westx' 
};
let south: DirectionsX = DirectionsX.SOUTH;
console.log(south); // prints southx


/* ANY */
let notSure: any = "can be a string";
console.log('any notSure', notSure);

notSure = 10;
console.log('any notSure', notSure);

notSure = true;
console.log('any notSure', notSure);

let notSureList: any[] = ['Akshay', false];
console.log('notSureList', notSureList);


/* VOID: absense of having a type at all */
let unusable: void = undefined;
console.log('void unusable', unusable);
unusable = null;
console.log('void unusable', unusable);
// unusable = 100; // will raise error
// console.log('void unusable', unusable);


function printWarning(): void {
	console.log('function printWarning() is called');
}
printWarning();


/* NULL and UNDEFINED */
let u: undefined = undefined;
let n: null = null;

console.log('undefined', undefined);
console.log('null', null);


/* NEVER */
/* The never type represents the type of values that never occur. */
function logError(message: string): never {
	throw new Error(`Something went wrong: ${message}`);
}


/* object */
let student: object = {
	name: 'Akshay',
	marks: {
		physics: 100,
		maths: 200
	}
};
console.log('object student', student);

let student2: object = null;
console.log('student2', student2); // works prints null


/* TYPE ASSERTIONS */
/* Sometimes you’ll end up in a situation where you’ll know more about a value than TypeScript does. Usually this will happen when you know the type of some entity could be more specific than its current type.

Type assertions are a way to tell the compiler “trust me, I know what I’m doing.” A type assertion is like a type cast in other languages, but performs no special checking or restructuring of data. It has no runtime impact, and is used purely by the compiler. TypeScript assumes that you, the programmer, have performed any special checks that you need. */

let aValue: any = `This is my new employee`;
let lenOfEmp: number = (<string>aValue).length;
console.log('lenOfEmp', lenOfEmp);

let lenOfEmp1: number = (aValue as string).length + 10;
console.log('lenOfEmp1', lenOfEmp1);

/* =================================================== */

let a = 10;
// a = 'Akshay'; // error: str not assignable to number
console.log('a', a);


/* =================================================== */
/* ARRAY DESTRUCTURING */

let newNumbers = [1, 2, 3];
let [firstNumber, secondNumber, thirdNumber] = newNumbers;
console.log('firstNumber', firstNumber);
console.log('secondNumber', secondNumber);
console.log('thirdNumber', thirdNumber);

// SWAPPING NUMBERS
[firstNumber, secondNumber] = [secondNumber, firstNumber];
console.log('firstNumber', firstNumber);
console.log('secondNumber', secondNumber);
console.log('thirdNumber', thirdNumber);

function foo ([firstNumber, secondNumber]: [number, number]) {
	console.log('foo firstNumber', firstNumber);
	console.log('foo secondNumber', secondNumber);
}
foo([1, 2])

let [startingNum, ...restNumbers] = [100, 200, 300, 400];
console.log('startingNum', startingNum);
console.log('restNumbers', restNumbers);

// same for tuple destructing
// same for object destructuring
let employee = {
	name: 'Akshay Suresh',
	position: 'SDE-I',
	skills: ['js', 'ts', 'python']
}
console.log('employee', employee);

let { skills } = employee;
console.log('skills', skills);

let { skills: employeeSkills } = employee;
console.log('employeeSkills', employeeSkills);
