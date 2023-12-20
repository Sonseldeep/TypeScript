// write a movie type alias to make the following two variables properly typed
// make sure that "originalTitle" is optional and "title " is readonly

// write a function called getProfit that accepts a single Movie object
// it should return the movie's worldwide gross minus its budget


type movie ={
    readonly title: string;
    originalTitle?:string;
    releaseyear: number;
    boxOffice: {
        budget: number;
        grossUs: number;
        grossworldWide: number;
        
    }, 

};
const movieName: movie ={
    title:"Avengers Endgame",
    originalTitle:"infinity model",
    releaseyear:2019,
    boxOffice:{
          budget: 2345677,
          grossUs: 34567890,
          grossworldWide: 123456789,
    },
};
const hollywood: movie ={
    title:"Dune",
    
    releaseyear:204,
    boxOffice:{
          budget: 345677,
          grossUs: 634567890,
          grossworldWide: 98123456789,
    },
};
function getProfit({boxOffice: {grossworldWide,budget}}:movie):number{
    return grossworldWide - budget;
}

/*

function getProfit(movies:movie):number{
   
   return movies.boxOffice.grossworldWide - movies.boxOffice.budget;
 
  return grossworldWide - budget;
    
  
};
*/
/*
function getProfit(movies:movie):number{
    const {grossworldwide, budget} = movies.boxOffice;
    return grossworldwide - budget;
}
*/
console.log(getProfit(hollywood));

console.log(getProfit(movieName));