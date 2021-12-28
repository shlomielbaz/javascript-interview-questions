N - represent number of lines, 
A to K represent a seats mark (I excluded) of each line.

The seats in the hall orgenized:
[ A | B | C ]     [  D | E | F | G ]    [  H | J | K ]


Your task is write a solution the returns the combination of sequence of 4 seats,
  the 'sequence' of 4 can be achived from:
    2 seats from the left/right groups and 2 seats from the middle group or;
    4 seats from the middle group, for example:
    [ A | B | C ]     [ D | E | F | G ]    [ H | J | K ]
    [ - | X | X ]     [ X | X | - | - ]    [ - | - | - ]
    [ - | - | - ]     [ X | X | X | X ]    [ - | - | - ]
    [ - | - | - ]     [ - | - | X | X ]    [ X | X | - ]

    
    
solution(2, '1A 2F 1G 3H')
[ A | B | C ]     [ D | E | F | G ]    [ H | J | K ]
[ + | - | - ]     [ - | - | - | + ]    [ - | - | - ]
[ - | - | - ]     [ - | - | + | - ]    [ - | - | - ]
[ - | - | - ]     [ - | - | - | - ]    [ + | - | - ]
Should return 4 possibility combinations

solution(1, '')
[ A | B | C ] | [  D | E | F | G ] | [  H | J | K ]
[ - | - | - ] | [  - | - | - | - ] | [  - | - | - ]
Should return 3 possibility combinations
                                      
function solution(N, S) {
    // write your code in JavaScript (Node.js 8.9.4)
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K']
    const possible = [['B', 'C', 'D', 'E'], ['D', 'E', 'F', 'G'], ['F', 'G', 'H', 'J']]
    const sits = []
    const occupied = S.split(' ')
    let total = 0;

    for (let i=0; i<N; i++) {
        let o = {}
        for(k of letters) {
            o[k] = true;
        }
        sits.push(o)
    }
    
    for (let i=0; i<occupied.length; i++) {
        [n,k] = occupied[i].split('')
        if (n && k){
            sits[n-1][k] = false;
        }
    }
    console.log(sits)

    for (let i=0; i<N; i++) {
        
        for (let p of possible) {
            if ((sits[i][p[0]] && sits[i][p[1]] && sits[i][p[2]] && sits[i][p[3]])) {
                total++
            }
        }
    }

    return total;
}
