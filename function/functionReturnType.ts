
// here return type is number 
// we can define return type as number
// here a=0 b=0 is default type
console.log('--------------------------');
function add(a: number = 0,b:number=0): number{
    return a+b;

};
console.log(add(2,3));
console.log('----------------------------');

// returning type is string we can define 
const person = function(name:string = 'Stranger'): string{
   // here we dind return then it will show error on type sting  name;
   return name;

};
console.log('HariKrishna');