import { Friend, Colleague, ColleagueHistory } from './myTypes'

const friend1 = {
    name: "Futong Zhu",
    phone: "087-12345",
    age: 23,
};

const friend2 = {
    name: "Zixin Wang",
    phone: "086--12345",
    age: 23,
};

export const friends = [friend1, friend2];
// console.log(friends[0]);

//   -------------------
const colleague1 = {
    name: "Ralph Graham",
    department: "Engineering",
    contact: {
        email: "rgraham@company.com",
        extension: 121,
    },
};

const colleague2 = {
    name: "Patti Burke",
    department: "Finance",
    contact: {
        email: "pburke@company.com",
        extension: 132,
    },
};

const colleague3 = {
    name: "Dean Sullivan",
    department: "HR",
    contact: {
        email: "dos@company.com",
        extension: 125,
    },
};

export const colleagues: ColleagueHistory = {
    current: [colleague1, colleague2, colleague3],
    former: [],
};

// console.log(colleagues.current[0]);


