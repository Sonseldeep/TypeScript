// function definiation
function square(num:number){
    
    return num*num;
};
console.log(square(9));

// here num only has any type so we have to define num as number

// aroow function
const nameOfCollege = (name:string)=>{
    return name;
}
console.log(nameOfCollege('Ascol'));

// function literals


const product = function(x:number,y:number){
    return x*y
};
console.log(product(2,5));