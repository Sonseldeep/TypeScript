type nameList ={
    name: { fname: string;
        lname: string;
    }
    
};

type phoneNumber ={
    phone:number;
};

// here & symbol combine the type of both
type combination = nameList& phoneNumber;

const mixture: combination ={
    name:{
        fname:"John",
        lname:"Abhram",
    },
    phone: 9823332855,
}