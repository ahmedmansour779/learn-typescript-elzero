"use strict";
let showMsg = true;
function showDetails(name, age, salary) {
    let test = 10;
    if (showMsg) {
        return `Hello ${name}, Age Is ${age}, Salary Is ${salary}, Test Variable ${test}`;
    }
    return `No Data To Show`;
}
console.log(showDetails("Osama", 40, 5000));
//# sourceMappingURL=videoNumber8.js.map