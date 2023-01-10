class person {
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const normalPerson = new person("Iffat", "Bari", 25000);
console.log(normalPerson);

const heroPerson = new person("Hero", "Alam", 2005000);
console.log(heroPerson);

const armyPerson = new person("Karim", "Uddin", 15000);
console.log(armyPerson);

function Person1(firstName, lastName, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}

const oldMan = new Person1("Jalal", "Uddin", 2888888888);
console.log(oldMan);