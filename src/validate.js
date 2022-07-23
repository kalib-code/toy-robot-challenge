/** validate first command 
 * @param {number} round - 0
 * @param {string} command - PLACE X,Y,F
 * @returns {boolean}
*/
const firstCommandPattern = (round, command) => {
    return round === 0 && /PLACE\s\S{5}/.test(command) === false;
};

/** validate second command
 * @param {string} command - PLACE X,Y,F or MOVE or LEFT or RIGHT or REPORT
 * @returns {boolean}
 */
const secondCommandPattern = (command) => {
    return /PLACE\s\S{5}|MOVE|LEFT|RIGHT|REPORT/.test(command) === false;
}

/** Validate Coordinate  
 * @param {number} x - x coordinate
 * @param {number} y - y coordinate
 * @returns {boolean}
 */
exports.isValidCoordinate = (x, y) => {
    const testX = parseInt(x) >= 0 && parseInt(x) < 5;
    const testY = parseInt(y) >= 0 && parseInt(y) < 5;

    return testX && testY;
}


/**
 * 
 * @param {string} direction - NORTH, SOUTH, EAST, WEST
 * @returns {boolean}
 */
exports.isValidDirection = (direction) => {
    const result = ['NORTH', 'SOUTH', 'EAST', 'WEST'].indexOf(direction) !== -1;
    return result;
}


/**
 * Validate Command
 * @param {number} round - starting from 0
 * @param {string} command - command to be validated
*/
exports.isValidCommand = (round, input) => {
    let valid = true;
    if (firstCommandPattern(round, input)) {
        console.log('Invalid command format. Please try again. PLACE X,Y,F');
        valid = false;
    } else if (secondCommandPattern(input)) {
        console.log(`Invalid command ${input} Please try again. PLACE X,Y,F or MOVE or LEFT or RIGHT or REPORT`);
        valid = false;
    }

    return valid;
}
