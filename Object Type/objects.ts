function printName(person: { fname: string, lname: string }):void {
    console.log(`${person.fname} ${person.lname}`);
};
printName({ fname: "Sandeep", lname: "Shrestha" });

// here we are not returning nothing so be specific  by voiud type