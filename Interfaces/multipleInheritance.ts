interface Human {
    nau: string;
}


interface Employee {
    readonly id:number;
    email: string;
}


interface Engineer extends Human, Employee {
    level: string;
    languages: string[];
}

const computerEng: Engineer = {
    nau:'Sandeep Shrestha',
    id: 345,
    email: 'email@example.com', 
    level: "Senior",
    languages:['c++','java','JavaScript','TypeScript','OOP'],
}

console.log(computerEng.nau, computerEng.languages);