const findTheOldest = function(people) {
    return people.reduce((oldest, currentPerson) => {
        if (getAge(oldest) > getAge(currentPerson)) {
            return oldest;
        }
        return currentPerson;
    }, people[0]);
};

function getAge(person) {
    let age;
    if ('yearOfDeath' in person) {
        age = person.yearOfDeath - person.yearOfBirth;
    }
    else {
        let currentYear = (new Date()).getFullYear();
        age = currentYear - person.yearOfBirth;
    }
    return age;
}
// Do not edit below this line
module.exports = findTheOldest;
