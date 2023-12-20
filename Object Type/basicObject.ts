
type data = {
    name: {
        fname: string;
        lname: string
    }

    phoneNumber: {
        phone1: number;
        phone2: number
    }

    hobbies: {
        sports: object
        movies: object
    }


    qualification: {
        degree: string;
        collegeName: string;
        sem: number;
    }

};
const Details: data = {
    name: {
        fname: "sandeep",
        lname: 'Shrestha',
    },
    phoneNumber: {
        phone1: 9823332855,
        phone2: 9847155934,
    },
    hobbies: {
        sports: ['cricket', 'football', 'cycling'],
        movies: ['The Dark Knight Rises', 'Inception', "Memento"],
    },
    qualification: {
        degree: 'Bachelor of Technology (Computer Science)',
        collegeName: "ASCOL,Thamel",
        sem: 2,
    }

}

console.log(Details.name.fname, Details.name.lname, Details.phoneNumber.phone1);