module.exports.calc = function (rolls) {
    let wounds = 0;

    rolls.forEach(roll => {
        wounds += calcSingleRoll(roll);
    });

    return wounds;
}

let RESULTS = {
    hit: {},
    crit: {},
    miss: {}
}

module.exports.RESULTS = RESULTS;

function calcSingleRoll(roll) {
    if (roll === RESULTS.hit || roll === RESULTS.crit) {
        return 1;
    }
    return 0;
}