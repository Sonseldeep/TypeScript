// tupples are array of fixed length and ordered with specific types -like super rigid arrays;
// they dont exit in JS

let myTupples: [number, string] = [2, 'two'];
let color: [string, string, number];
color = ['red', 'blue', 234];
console.log(color);

// but cant assign myTupples =['ten','10];
// creating tuples
console.log('----------------------------------------');

type HTTPResponse = [number,string];
const goodRes: HTTPResponse =[200,'ok'];
const badRes: HTTPResponse=[404,'Not Found'];
// array has been created 
// but by push method we can add any number
// it doesnt care about limit { number, string} only 2 element as original

/*
goodRes.push(100);
goodRes.push("HareKrishna");
goodRes.pop()
console.log(goodRes);
*/

const responses: HTTPResponse[]=[
    [404,'notfound'],
    [200,'found'],
];
console.log(responses);