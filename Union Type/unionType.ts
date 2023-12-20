let age: number | string = 'ram';


age = 23;
age = "23";

console.log(age)

type point = {
    x: number;
    y: number;
};
type Locaction = {
    latitude: number;
    longitude: number
};

let cooridinates: point | Locaction = {
  x:23,
  y:34,
};
cooridinates = {
    latitude: 34,
    longitude: 43
};
console.log(cooridinates);