var robot = require('robotjs');

function type(text) {
    robot.typeString(text);
}

module.exports.type = type