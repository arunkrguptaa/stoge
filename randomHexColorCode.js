// ex #00FF00
function randomHexColorCode() {
    var n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
};

module.exports = randomHexColorCode;