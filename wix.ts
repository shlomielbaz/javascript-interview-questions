const leftTurnMgr: {[key: string]: string} = {
    'N': 'W',
    'W': 'S',
    'S': 'E',
    'E': 'N',
}
const rightTurnMgr: {[key: string]: string}  = {
    'N': 'E',
    'E': 'S',
    'S': 'W',
    'W': 'N',
}

function findTarget(boardSize: number, trip: string): [[number, number], string] {
    const steps = trip.split("");
    console.info(`Player trip ${steps.join(' ')}`)
    let idx = 0;
    let step1 = 1;
    let step2 = 1;
    let direction = 'N'

    const directionHelper = (dir: string) => {
        switch(dir) {
            case 'N':
                step1 = step1 + 1
                break;
            case 'S':
                step1 = step1 - 1
                break;
            case 'E':
                step2 = step2 + 1
                break;
            case 'W':
                step2 = step2 - 1
                break;
        }
    }

    try {
        while (idx < boardSize) {
            switch (steps[idx]) {
                case 'F':
                    console.info('Moving Forward')
                    directionHelper(direction);
                    break;
                case 'R':
                    console.info('Turning Right')
                    direction = rightTurnMgr[direction];
                    break;
                case 'L':
                    console.info('Turning Left')
                    direction = leftTurnMgr[direction];
                    break;
                default:
                    idx = idx + 1;
                    console.warn(`unknown step of ${steps[idx]}`)
                    break;
            }
            if (step1 > 0 && step1 < boardSize && step2 > 0 && step2 < boardSize) {
                idx = idx + 1;
            }
            else {
                throw Error('Index unboundries')
            }
            console.info(`[[${step1}, ${step2}], ${direction}]`)
        }
    }
    catch(e: any) {
        return e.message
    }
    return [[step1, step2], direction];
}

console.log(findTarget(5, 'FFLLFFFFFRRF'))