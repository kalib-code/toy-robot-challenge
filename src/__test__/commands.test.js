const { commands } = require('../commands');
const { isValidCommand, isValidCoordinate, isValidDirection } = require('../validate');

describe('commands', () => {
    let logSpy;
    let x;
    let y;
    let direction;
    beforeAll(() => {
        x = 0;
        y = 0;
        direction = 'NORTH';

    })

    it('should return true if the command is valid', () => {
        let validCommands = ['PLACE 1,2,NORTH', 'MOVE', 'LEFT', 'RIGHT', 'REPORT'];
        let invalidFirstCommands = ['HELLO', 'LOREM', 'IPSUM'];
        let invalid2ndCommands = ['PLACE 1,2,NORTH', 'MOVE', 'LOREM',];
        expect(isValidCommand(0, 'PLACE 1,2,NORTH')).toBe(true);
        expect(isValidCommand(0, 'HELLO')).toBe(false);

        validCommands.forEach(cmd => {
            expect(isValidCommand(cmd)).toBeFalsy();
        }
        );
        invalidFirstCommands.forEach(cmd => {
            expect(isValidCommand(cmd)).toBeFalsy();
        }
        );
        invalid2ndCommands.forEach(cmd => {
            expect(isValidCommand(cmd)).toBeFalsy();
        })


    },

        it('should test for invalid and valid coordinate and direction', () => {
            let coordinates = [[0, 0], [1, 1], [2, 2], [3, 3], [4, 4]];
            let directions = ['NORTH', 'SOUTH', 'EAST', 'WEST'];
            let invalidCoordinates = [[-1, 0], [0, -1], [5, 0], [0, 5]];
            let invalidDirections = ['HELLO', 'LOREM', 'IPSUM'];
            coordinates.forEach(coord => {
                directions.forEach(dir => {
                    expect(isValidCoordinate(coord[0], coord[1])).toBe(true);
                    expect(isValidDirection(dir)).toBe(true);
                }
                );
            })
            invalidCoordinates.forEach(coord => {
                directions.forEach(dir => {
                    expect(isValidCoordinate(coord[0], coord[1])).toBe(false);
                }
                );
            })
            invalidDirections.forEach(dir => {
                expect(isValidDirection(dir)).toBe(false);
            })
        }),


        it("should not return failed", () => {
            let cmd = 'PLACE 1,2,NORTH';
            expect(commands.PLACE(cmd)).toBeFalsy();
        }))

    it('should return true if the command PLACE is valid', () => {

        logSpy = jest.spyOn(console, 'log')
        commands.PLACE(x, y, direction);
        commands.REPORT();
        expect(logSpy).toHaveBeenCalledWith(`Output: ${x}, ${y}, ${direction}`);
    })

    it('should return 0,0 NORTH 360 turn', () => {
        let cmdMove360Left = ['PLACE', 'LEFT', 'LEFT', 'LEFT', 'LEFT', 'REPORT']
        logSpy = jest.spyOn(console, 'log')

        cmdMove360Left.forEach(cmd => {
            if (cmd === 'PLACE') {
                commands[cmd](x, y, direction);
            } else {
                commands[cmd]();
            }

            expect(logSpy).toHaveBeenCalledWith(`Output: ${x}, ${y}, ${direction}`);

        })

    })

    it('should move around the table once using LEFT', () => {
        let cmdMove360Left = ['PLACE', 'MOVE', 'MOVE', 'MOVE', 'MOVE', 'LEFT', 'MOVE', 'MOVE', 'MOVE', 'MOVE', 'LEFT', 'MOVE', 'MOVE', 'MOVE', 'MOVE', 'LEFT', 'MOVE', 'MOVE', 'MOVE', 'MOVE', 'LEFT', 'REPORT']
        logSpy = jest.spyOn(console, 'log')

        cmdMove360Left.forEach(cmd => {
            if (cmd === 'PLACE') {
                commands[cmd](x, y, 'EAST');
            } else {
                commands[cmd]();
            }
            expect(logSpy).toHaveBeenCalledWith(`Output: ${x}, ${y}, NORTH`);

        })

    })

    it('should move around the table once using RIGHT', () => {
        let cmdMove360Right = ['PLACE', 'MOVE', 'MOVE', 'MOVE', 'MOVE', 'RIGHT', 'MOVE', 'MOVE', 'MOVE', 'MOVE', 'RIGHT', 'MOVE', 'MOVE', 'MOVE', 'MOVE', 'RIGHT', 'MOVE', 'MOVE', 'MOVE', 'MOVE', 'RIGHT', 'REPORT']
        logSpy = jest.spyOn(console, 'log')

        cmdMove360Right.forEach(cmd => {
            if (cmd === 'PLACE') {
                commands[cmd](x, y, 'EAST');
            } else {
                commands[cmd]();
            }
            expect(logSpy).toHaveBeenCalledWith(`Output: ${x}, ${y}, NORTH`);

        })

    })

    it('should not exceed movement on 5x5 table', () => {
        logSpy = jest.spyOn(console, 'log')

        commands.PLACE(x, y, direction);
        commands.MOVE();
        commands.MOVE();
        commands.MOVE();
        commands.MOVE();
        commands.MOVE();
        commands.MOVE();
        commands.REPORT();

        expect(logSpy).toHaveBeenCalledWith(`Output: ${x}, ${4}, ${direction}`);


    })

    it('should return true if the command LEFT is valid', () => {
        let cmds = ['PLACE', 'LEFT', 'REPORT'];
        logSpy = jest.spyOn(console, 'log')

        cmds.forEach(cmd => {
            if (cmd === 'PLACE') {
                commands[cmd](x, y, direction);
            } else {
                commands[cmd]();
            }
            expect(logSpy).toHaveBeenCalledWith(`Output: ${x}, ${y}, ${direction}`);

        })

        expect(logSpy).toHaveBeenCalledWith(`Output: ${x}, ${y}, WEST`);
    })

    it('should return true if the command LEFT is valid', () => {
        let cmds = ['PLACE', 'LEFT', 'LEFT', 'REPORT'];
        logSpy = jest.spyOn(console, 'log')
        cmds.forEach(cmd => {
            if (cmd === 'PLACE') {
                commands[cmd](x, y, direction);
            } else {
                commands[cmd]();
            }
            expect(logSpy).toHaveBeenCalledWith(`Output: ${x}, ${y}, ${direction}`);

        })
        expect(logSpy).toHaveBeenCalledWith(`Output: ${x}, ${y}, SOUTH`);
    })
    it('should return true if the command LEFT is valid', () => {
        let cmds = ['PLACE', 'LEFT', 'LEFT', 'LEFT', 'REPORT'];

        logSpy = jest.spyOn(console, 'log')

        cmds.forEach(cmd => {
            if (cmd === 'PLACE') {
                commands[cmd](x, y, direction);
            } else {
                commands[cmd]();
            }
            expect(logSpy).toHaveBeenCalledWith(`Output: ${x}, ${y}, ${direction}`);

        })

        expect(logSpy).toHaveBeenCalledWith(`Output: ${x}, ${y}, EAST`);
    })

    it('should return true if the command RIGHT is valid', () => {
        logSpy = jest.spyOn(console, 'log')
        commands.PLACE(x, y, direction);
        commands.RIGHT();
        commands.REPORT();
        expect(logSpy).toHaveBeenCalledWith(`Output: ${x}, ${y}, EAST`);
    })
    it('should return true if the command REPORT is valid', () => {
        logSpy = jest.spyOn(console, 'log')
        commands.PLACE(x, y, direction);
        commands.REPORT();
        expect(logSpy).toHaveBeenCalledWith(`Output: ${x}, ${y}, ${direction}`);
    })

    it('should return Place to set to 1,0 EAST', () => {

        logSpy = jest.spyOn(console, 'log')
        commands.PLACE(1, 0, 'EAST');
        commands.REPORT();
        expect(logSpy).toHaveBeenCalledWith(`Output: 1, 0, EAST`);

    })
})