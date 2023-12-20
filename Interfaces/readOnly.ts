interface Student {
    fname: string;
    mname?: string;
    lname: string;
    phNo: number;
    readonly id: number;  // readOnly means we cannt cahnge once its assign the value
}

const Sandeep: Student ={
    fname: 'Sandee',
    lname: 'Shrestha',
    phNo:9823332855,
    id: 20,
}
// if I want to modify name sandeep as Ram;
Sandeep.fname =' Ram';
// however if I want to change the id number then it trows an error
 // Sandeep.id =89;
console.log(Sandeep);