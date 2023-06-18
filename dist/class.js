"use strict";
class User {
    constructor(username, salary) {
        this.u = username;
        this.s = salary;
        this.msg = function () {
            return `Hello ${this.u} Your Salary Is ${this.s}`;
        };
    }
    sayMsg() {
        return `Hello ${this.u} Your Salary Is ${this.s}`;
    }
}
let userOne = new User("Elzero", 6000);
console.log(userOne.u);
console.log(userOne.s);
console.log(userOne.msg());
console.log(userOne.sayMsg());
class UserP {
    constructor(username, salary, address) {
        this.username = username;
        this.salary = salary;
        this.address = address;
        this.msg = function () {
            return `Hello ${this.username} Your Salary Is ${this.salary}`;
        };
    }
    sayMsg() {
        return `Hello ${this.username} Your Salary Is ${this.salary}`;
    }
}
let userP = new UserP("Elzero", 6000, "Cairo");
console.log(userP.msg());
console.log(userP.sayMsg());
class UserS {
    get username() {
        return this._username;
    }
    set username(value) {
        this._username = value;
    }
    constructor(_username, salary, address) {
        this._username = _username;
        this.salary = salary;
        this.address = address;
        this.msg = function () {
            return `Hello ${this._username} Your Salary Is ${this.salary}`;
        };
    }
    sayMsg() {
        return `Hello ${this._username} Your Salary Is ${this.salary}`;
    }
}
let userOneS = new UserS("Elzero", 6000, "Cairo");
console.log(userOneS.username);
userOneS.username = "Ahmed";
console.log(userOneS.username);
console.log(userOneS.salary);
console.log(userOneS.msg());
console.log(userOneS.sayMsg());
class UserSM {
    static getCount() {
        console.log(`${this.created} Objects Created`);
    }
    constructor(username) {
        this.username = username;
        UserSM.created++;
    }
}
UserSM.created = 0;
let u1 = new UserSM("Elzero");
let u2 = new UserSM("Web");
let u3 = new UserSM("School");
UserSM.getCount();
class UserII {
    constructor(username, theme, font) {
        this.username = username;
        this.theme = theme;
        this.font = font;
    }
    save() {
        console.log(`Saved`);
    }
    update() {
        console.log(`Updated`);
    }
}
let userOneII = new UserII("Elzero", true, "Open Sans");
console.log(userOneII.username);
console.log(userOneII.font);
userOneII.save();
userOneII.update();
class Food {
    constructor(title) {
        this.title = title;
    }
}
class Pizza extends Food {
    constructor(title, price) {
        super(title);
        this.price = price;
    }
    getCookingTime() {
        console.log(`Cooking Time For Pizza Is 1 Hour`);
    }
}
class Burger extends Food {
    constructor(title, price) {
        super(title);
        this.price = price;
    }
    getCookingTime() {
        console.log(`Cooking Time For Burger Is Half Hour`);
    }
}
let pizzaOne = new Pizza("Awesome Pizza", 100);
console.log(pizzaOne);
console.log(pizzaOne.title);
console.log(pizzaOne.price);
pizzaOne.getCookingTime();
//# sourceMappingURL=class.js.map