
module.exports.transform = function (inString) {
    let charCode = inString.charCodeAt(0);
    charCode = calculateNewCharCode(charCode);
    return String.fromCharCode(charCode);
}

const ROT_DISTANCE = 13;

const UPPER_A_CODE = 65;
const UPPER_M_CODE = 77;
const UPPER_N_CODE = 78;
const UPPER_Z_CODE = 90;

const LOWER_A_CODE = 97;
const LOWER_M_CODE = 109;
const LOWER_N_CODE = 110;
const LOWER_Z_CODE = 122;

function calculateNewCharCode(charCode) {
    if (isCharBetweenAandN(charCode)) {
        return charCode + ROT_DISTANCE;
    }

    if (isCharBetweenNandZ(charCode)) {
        return charCode - ROT_DISTANCE;
    }

    return charCode;
}

function isCharBetweenAandN(charCode) {
    return isCharBetweenLowerAandLowerM(charCode)
        ||
        isCharBetweenUpperAandUpperM(charCode);
}

function isCharBetweenLowerAandLowerM(charCode) {
    return isBetween(charCode, LOWER_A_CODE, LOWER_M_CODE);
}

function isCharBetweenUpperAandUpperM(charCode) {
    return isBetween(charCode, UPPER_A_CODE, UPPER_M_CODE);
}
function isCharBetweenNandZ(charCode) {
    return isCharBetweenLowerNandLowerZ(charCode)
        ||
        isCharBetweenUpperNandUpperZ(charCode);
}

function isCharBetweenLowerNandLowerZ(charCode) {
    return isBetween(charCode, LOWER_N_CODE, LOWER_Z_CODE);
}

function isCharBetweenUpperNandUpperZ(charCode) {
    return isBetween(charCode, UPPER_N_CODE, UPPER_Z_CODE);
}

function isBetween(charCode, lowerBound, upperBound) {
    return charCode >= lowerBound && charCode <= upperBound;
}