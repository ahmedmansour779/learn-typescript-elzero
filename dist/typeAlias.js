"use strict";
let theNameTypeAlias = "Elzero";
theNameTypeAlias = "Osama";
let allTypeAlias = 10;
allTypeAlias = 100;
allTypeAlias = "Osama";
function getActions(btns) {
    console.log(`Action For Button Up Is ${btns.up}`);
    console.log(`Action For Button Right Is ${btns.right}`);
    console.log(`Action For Button Down Is ${btns.down}`);
    console.log(`Action For Button Left Is ${btns.left}`);
}
getActions({ up: "Jump", right: "Go Right", down: "Go Down", left: "Go Left", x: true });
//# sourceMappingURL=typeAlias.js.map