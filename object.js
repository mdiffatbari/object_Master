const details = {
    firstName: "Iffat",
    lastname: "Bari",
    salary: 15000,
    getFullName: function () {
        console.log(this.firstName, this.lastname);
    },
    payBill: function (amount) {
        this.salary = this.salary - amount;
        return this.payBill;
    }
}
details.payBill(5000);
details.payBill(5000);
console.log(details.salary);