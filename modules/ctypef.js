const clipboardy = require('clipboardy');
var robot = require('robotjs');

function typef(text) {
    clipboardy.writeSync(text)
    robot.keyToggle('control', 'down')
    robot.keyTap('v')
}

module.exports.typef = typef