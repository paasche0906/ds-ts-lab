import { friends, colleagues } from './01-basics'
import { Friend, Colleague, EmailContact } from './myTypes'

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
function highestExtension(cs: Colleague[]) { // Inferred retun type
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

function sortColleagues(
    colleagues: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number,
    max?: number
): EmailContact[] {
    let end = colleagues.length;
    if (max !== undefined) {
        end = max < 2 ? 1 : max
    }
    const sorted = colleagues.sort(sorter);
    const fullResult = sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
    return fullResult.slice(0, end)
}
// Test invocations
console.log(sortColleagues(colleagues.current, (a, b) => (a.contact.extension - b.contact.extension), 3));
console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length), 1));
console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length)));


function findFriends(friends: Friend[], predicate: (f: Friend) => boolean): Friend[] {
    return friends.filter(predicate);
}

console.log(findFriends(friends, (friend) => friend.name.startsWith('P')));
console.log(findFriends(friends, (friend) => friend.age < 35));

function addInterest(f: Friend, interest: string): Friend {
    if (f.interests === undefined) {
        f.interests = [];
    }
    f.interests.push(interest);
    return f;
}

console.log(addInterest(friends[1], 'Politics'))





