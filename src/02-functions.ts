import { friends, colleagues } from './01-basics'
import { Friend, Colleague } from './myTypes'

function older(f: Friend): string {
    f.age += 1
    return `${f.name} is now ${f.age}`
}

console.log(older(friends[0]))

function allOlder(f: Friend[]): string[] {
    return friends.map(f => {
        const newAge = f.age + 1;
        return `${f.name} is now ${newAge}`;
    });
}

console.log(allOlder(friends))

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
    const result = cs.sort(
        (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
}
console.log(highestExtension(colleagues.current));

function addColleague(cs: Colleague[], name: string, department: string, email: string): void {
    const newColleague: Colleague = {
        name: name,
        department: department,
        contact: {
            email: email,
            extension: 100 + cs.length,
        },
    };
    cs.push(newColleague);
}

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));



