function doingSomething() {
    console.log(3333);
}

console.log(1111);
console.log(2222);
setTimeout(doingSomething, 2000);
setTimeout(() => {
    console.log("set time done");
}, 4000);
console.log(4444);
setInterval(() => {
    console.log("time interval");
}, 2000);
console.log(5555);
console.log(6666);