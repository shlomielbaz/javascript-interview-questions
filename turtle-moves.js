
const matrix = [new Array(10)]


function move(pos, steps) {

    for(const step of steps) {
        x = pos[0] +  step[0];
        y = pos[1] +  step[1];

        // check if x or y in the boundaries of matrix

        pos[0] = x;
        pos[1] = y;
    }

    console.log(pos)
}










const pos = [1,1]
const steps = [[0, 1],[-1, 1],[-3,0]]

const result = [3,3]

move(pos, steps);