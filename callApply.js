const normalPerson = {
    name: "Iffat",
    work: "Student",
    salary: 25000,
    chargeBill: function (amount) {
        this.salary = this.salary - amount;
    },
    phoneNumber: 0123546789987452
}

const heroPerson = {
    name: "Rahim",
    work: "Student",
    salary: 29000,
    phoneNumber: 0123546789987452
}

const hitMan = {
    name: "Karim",
    work: "Student",
    salary: 300000,
    phoneNumber: 0123546789987452
}
/* ============bind============ */
//const hitManCharge = normalPerson.chargeBill.bind(hitMan);

// hitManCharge(2000);
// console.log(hitMan.salary);

/* ============call============ */
// const hitmanChargeCall = normalPerson.chargeBill.call(hitMan, 1000);

// console.log(hitMan.salary);

/* ============apply============ */

normalPerson.chargeBill.apply(hitMan, [5000]);
console.log(hitMan.salary);





