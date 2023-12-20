
// default parameter

function greet(person: string ='Stranger'){
    return `hi ${person}`;
};
console.log(greet()); // here we havent pass any string so it assign default value
console.log('-------------------------------');


var sq = (num: number=9)=>{
    return num*num;
};
console.log(sq()); // if we provide nothing then it assume num as 9;
console.log(sq(10)); // it assign num as 10;