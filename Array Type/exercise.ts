// create an empty array of numbers called "ages";
// create an array variables called gameBoard that stars as an empty array;
// it should be typed to hold a 2D array of string;
// PART 3??/
// create a Product type that contains a name and a price 
// an example produce could be:
// {name: "coffee mug",price:150}
// part 4//
// write a function called getTotal that accepts an array of Product types;
// it should return the sum of all the products' prices

const ages: Array<number> =[];
const gameBoard: string[][]=[];  

type Product ={
    name: string;
    price: number;
};


function getTotal(products:Product[]):number {
    let total=0;
    for(let product of products){
        total+=product.price;
    }
    return total;
};
