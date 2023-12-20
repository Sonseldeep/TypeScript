// CREATE A VARIABLE CALLED HIGHSCORE THAT CAN BE NUMBER OR A BOOLEAN

let highScore: number | boolean;
//2=> CREATE AN ARRAY CALLED STUFF
// IT CAN BE AN ARRAY OF NUMBER OR ARRAY OF STRINGS
// IT CANT BE AN ARRAY OF NUMBER AND STRING (MIXED TOGETHER)
var stuff1: number[] | string[] = [];

//3=> CREATE A LITERAL TYPE CALLED 'SKILLEVEL'
// THERE ARE 4 ALLOWED VALUES: 'BEGINEER', 'INTERMEDIATE','ADVANCE','EXPERT'
type skl = 'bigineer' | 'intermediate' | 'advance' | 'expert';

//4=> create a type called SkiSchoolStudent
// name must be string
// age must be number
// soprt must be "ski" or "snowboard"
// level must be a value from the SkilLevel type (from above)
type SkiSchoolStudent = {
    name: string;
    age: number;
    sport: 'ski' | 'snowboard';
    level: skl;

};
// define a type to represent an RGB colour
// r=> number
// g=> number
// b=> number
type RGB = {
    r: number;
    g: number;
    b: number;
};
// define a type to represent an HSL colour
// h,s,l => number
type HSL = {
    h: number;
    s: number;
    l: number;
};
// CREATE AN    array called colour that can hold a mixture of RGB & HSL colour type;
const colour: (RGB | HSL)[] = [];

// write a function called greet the accepts a single string OR an array of string
// it should print "hello,<name></name>" for that single person or greet each person in the array with same format
const greet = (name: string | string[]): void => {
    if (typeof name === 'string') {
        console.log(`hello, ${name}`);
    } else {
        for (let person of name) {
            console.log(`Hello,${person} `);
        }

    }
};
const list:string[] =['ram','hari','krishna'];
greet(list);


