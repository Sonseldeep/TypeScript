// a function with literal + union type parameter
const giveAns= (answer: 'yes'|'Yes'| 'no'|'No'| 'maybe') =>{
    return `the answer is ${answer}`;
};

// can provide one of the literals in union 
console.log(giveAns('no'));


function express(mood: "happy"|"sad"|"emotional"|"usual"):void{
    console.log(`your mood is ${mood}`);
};
console.log(express('sad'));