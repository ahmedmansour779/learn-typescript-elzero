"use strict";
function logging(msg) {
    console.log(msg);
    return;
}
console.log(logging("Iam A Message"));
console.log("Test logging");
const fail = (msg) => {
    throw new Error(msg);
};
console.log(fail("Iam A Message"));
console.log("Test fail");
function alwaysLog(name) {
    while (true) {
        console.log(name);
    }
}
//# sourceMappingURL=voidAndNever.js.map