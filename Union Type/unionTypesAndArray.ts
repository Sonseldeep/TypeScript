//const stuff: any[]=[1,2,3,'Ram','Krishna',true];

// dont use any instead use bracket
// here we can store number and string simultaneously
const stuff: (number| string)[] =[1,2,3,'Ram'];

// but  this is completely different 
// here either we can store number or string 
const stuff_1: number[] | string[] =[];
