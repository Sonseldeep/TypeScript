const greeting = (person:string) =>{
   return `Hello ${person} sir`;
};
console.log(greeting('Sandeep'));
console.log('----------------------------------');

const details = ( name: string,age:number,isFunny:boolean) =>{
    return (`name: ${name}  age: ${age}   isFunny: ${isFunny}`);

}
console.log(details('Sandeep',20,true));