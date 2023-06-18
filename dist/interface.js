"use strict";
let userI = {
    id: 100,
    userName: "Elzero",
    country: "Egypt"
};
userI.country = "Syria";
console.log(userI);
function getDataI(data) {
    console.log(`Id Is ${data.id}`);
    console.log(`Username Is ${data.userName}`);
    console.log(`Country Is ${data.country}`);
    console.log(typeof (userI));
}
getDataI({ id: 200, userName: "Osama", country: "KSA" });
let userIMAP = {
    id: 100,
    username: "Elzero",
    country: "Egypt",
    sayHello() {
        return `Hello ${this.username}`;
    },
    sayWelcome: () => {
        return `Welcome ${userIMAP.username}`;
    },
    getDouble(n) {
        return n * 2;
    }
};
console.log(userIMAP.id);
console.log(userIMAP.sayHello());
console.log(userIMAP.sayWelcome());
console.log(userIMAP.getDouble(100));
let userSettings = {
    theme: true,
    font: "Open Sans",
    sidebar: false,
    external: true
};
let userIE = {
    id: 100,
    username: "Elzero",
    country: "Egypt",
    role: "Mod",
    protect: true
};
console.log(userIE.id);
//# sourceMappingURL=interface.js.map