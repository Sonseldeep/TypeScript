type User = {
     readonly id: number;
    username: string;
};


const user: User = {
    id: 2017,
    username:"SonselDeep",

}
// we cant modify the user id value beacuse its read only form;
// user.id = 2028;
// if we remove readonly from id then we can modify the value 
//user.id = 2089;
console.log(user.id);
console.log(user.username);
