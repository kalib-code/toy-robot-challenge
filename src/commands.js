let coordinate = [0, 0];
let currentDirection = '';

const commands = {

    /**Place the toy robot at a given position
    * @param {string} x - x coordinate 
    * @param {string} y - y coordinate
    * @param {string} direction - direction of the toy robot
    */
    'PLACE': (x, y, direction) => {
        if (x >= 0 && x <= 4 && y >= 0 && y <= 4) {
            coordinate = [x, y];
            currentDirection = direction;
        }
    },

    /** Move the toy robot one unit forward in the direction it is currently facing
    */
    'MOVE': () => {
        let x = coordinate[0];
        let y = coordinate[1];
        switch (currentDirection) {
            case 'NORTH':
                y++;
                break;
            case 'EAST':
                x++;
                break;
            case 'SOUTH':
                y--;
                break;
            case 'WEST':
                x--;
                break;
        }
        if (x >= 0 && x <= 4 && y >= 0 && y <= 4) {
            coordinate = [x, y];
        }else{
            console.log('STOP! YOUR ROBOT WILL CRASH IF YOU PROCEED');
            console.log('YOU CAN CHANGE DIRECTION OR SET A NEW PLACE TO AVOID CRASH');
        }
    },

    /**
     * Output a report on the command line 
     * */
    'REPORT': () => {
        console.log(`Output: ${coordinate[0]}, ${coordinate[1]}, ${currentDirection}`);
    },
    /**
     * Turn the toy robot 90 degrees to the left 
     * */
    'LEFT': () => {
        switch (currentDirection) {
            case 'NORTH':
                currentDirection = 'WEST';
                break;
            case 'EAST':
                currentDirection = 'NORTH';
                break;
            case 'SOUTH':
                currentDirection = 'EAST';
                break;
            case 'WEST':
                currentDirection = 'SOUTH';
                break;
        }
    },
    /**
     * Turn the toy robot 90 degrees to the right 
     */
    'RIGHT': () => {
        switch (currentDirection) {
            case 'NORTH':
                currentDirection = 'EAST';
                break;
            case 'EAST':
                currentDirection = 'SOUTH';
                break;
            case 'SOUTH':
                currentDirection = 'WEST';
                break;
            case 'WEST':
                currentDirection = 'NORTH';
                break;
        }
    }
}

exports.commands = commands;