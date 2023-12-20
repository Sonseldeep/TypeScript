interface Details {
    fname: string;
    mname?: string;
    lname: string;
    readonly id: number,
   // sayHi: ()=>string; // notation for method; here it accepts the 0 arg.
    // another syntxan for method
    sayHi(): string;

}

const Students:Details = {

 
fname:'sandeep',
lname:'shrestha',
id:20,
// here sayHi is missing
sayHi: ()=>{return "hello";},
}

console.log(Students);
