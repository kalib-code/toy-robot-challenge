const { commands } = require('./commands');
const { isValidCommand, isValidCoordinate, isValidDirection } = require('./validate');

const init = () => {

    console.log('Welcome to the Toy Robot Challenge!');
    console.log('Please enter your commands one per line.');
    console.log('COMMANDS: PLACE X,Y,F, MOVE, LEFT, RIGHT, REPORT');
    console.log('Press CTRL+C to exit the program.');

    let stdin = process.openStdin();

    let round = 0;
    let cmd = ['MOVE', 'LEFT', 'RIGHT', 'REPORT'];

    stdin.addListener("data", function (d) {
        let input = d.toString().trim();


        let valid = isValidCommand(round, input);
        if (input.startsWith('PLACE') && valid) {

            let inputArray = input.split(' ');
            let x = parseInt(inputArray[1].split(',')[0]);
            let y = parseInt(inputArray[1].split(',')[1]);
            let d = inputArray[1].split(',')[2].trim();
            if (isValidCoordinate(x, y) && isValidDirection(d)) {
                commands.PLACE(x, y, d);
            } else {
                console.log('Invalid command format. Please try again. PLACE X,Y,F');
            }
        }

        if (cmd.includes(input)) {
            commands[input]();

        }


        if (valid) {
            round++;
        }
    })

}

init();