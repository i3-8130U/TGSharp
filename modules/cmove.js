var robot = require('robotjs');

function move(x, y) {
    robot.moveMouse(x, y)
}

module.exports.move = move