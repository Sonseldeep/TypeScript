function printAge(age:number | string): void{
    console.log(`you are ${age} years old`);

};
printAge(67);
printAge('67');

// Narrwoing the type is simply doing a type check before working with a value. 
// if your value is string you may want to use if differently than if you got a number
// since unions allows multiple type for a value
// its good to check what came through before working in it

function calculateTax(price:number|string,tax:number){
    if( typeof price === 'string'){
       price = parseFloat(price.replace("$",""));
    } 
    return price *tax;

};
console.log(calculateTax(23,0.98));
console.log(calculateTax("$23",0.98));