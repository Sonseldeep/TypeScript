

interface Dog{
    name: string;
    age: number;
};
interface Dog{
    breed: string;
    bark():string;
}
const bhote: Dog ={
    name: 'bhote',
    age:3,
    breed: 'Bhote kukur',
    bark() {
        return "Woof Woof";
        
    },
}

// extending interface

interface serviceDog extends Dog {
    job: 'protect house' | ' bomb' | 'guide dog';

}
const ratoKukur: serviceDog ={
    name: 'rato kukur',
    age: 4,
    breed: 'palutu kukur',
    bark() {
        return "bhau bhau";
    },
    job: 'guide dog',
}