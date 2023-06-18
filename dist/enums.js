"use strict";
const KIDS = 15;
const EASY = 9;
const MEDIUM = 6;
const HARD = 3;
var Level;
(function (Level) {
    Level[Level["Kids"] = 15] = "Kids";
    Level[Level["Easy"] = 9] = "Easy";
    Level[Level["Medium"] = 6] = "Medium";
    Level[Level["Hard"] = 3] = "Hard";
})(Level || (Level = {}));
let lvl = "Easy";
if (lvl === "Easy") {
    console.log(`The Level Is ${lvl} And Number Of Seconds Is ${Level.Easy}`);
}
function getHardSeconds() {
    return 3;
}
var Kids;
(function (Kids) {
    Kids[Kids["Five"] = 25] = "Five";
    Kids[Kids["Seven"] = 20] = "Seven";
    Kids[Kids["Ten"] = 15] = "Ten";
})(Kids || (Kids = {}));
var LevelAD;
(function (LevelAD) {
    LevelAD[LevelAD["Kid"] = 15] = "Kid";
    LevelAD[LevelAD["Easy"] = 9] = "Easy";
    LevelAD[LevelAD["Medium"] = 6] = "Medium";
    LevelAD[LevelAD["Hard"] = getHardSeconds()] = "Hard";
})(LevelAD || (LevelAD = {}));
let lvlAD = "Easy";
if (lvl === "Easy") {
    console.log(`The Level Is ${lvlAD} And Number Of Seconds Is ${LevelAD.Hard}`);
}
//# sourceMappingURL=enums.js.map