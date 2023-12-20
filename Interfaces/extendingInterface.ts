interface student {
    qualification: string;
    skills: string;
    age: number;
};
interface student {
    mature : 'yes'| 'no',
    experince: 'yes'| 'no',
    drivingSkills: 'intermediate' | 'begineer' | 'advance'| 'perfect',
}

interface teacher extends student{
    level: number;
    salary: number;

};
const teacher1: teacher ={
    qualification: 'msc',
    skills:'maths, physics and chemistry ',
    age: 30,
    mature:"yes",
    experince:"yes",
    drivingSkills:"advance",
    level:8,
    salary:564789
};
console.log(teacher1.salary);