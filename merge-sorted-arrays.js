// Given two sorted arrays, merge them into one sorted array
// const A=[0,3,5,7,8]
// const B=[1,4,5,6,7,8,10,14]
// C=[0,1,3,4,5,5,6,7,7,8,8,10,14]


// Solution 1 O(n)
const mergeArr = (a, b) => {
    let a_idx = 0;
    let b_idx = 0;
    let counter = 0;
    let c = [];

    while (true) {
        if (a[a_idx] === undefined && b[b_idx] === undefined) {
            break
        }
    
        if (a[a_idx] === undefined) {
            c = c.concat(b.splice(b_idx, b.length));
            break;
        }
        else if(b[b_idx] === undefined) {
            c = c.concat(a.splice(a_idx, a.length));
            break;
        }
        else {
            if (a[a_idx] > b[b_idx]) {
                c.push(b[b_idx]);
                b_idx++
            }
        
            else if (b[b_idx] > a[a_idx]) {
                c.push(a[a_idx]);
                a_idx++
            }
    
            else {
                c.push(a[a_idx]);
                a_idx++;
                c.push(b[b_idx]);
                b_idx++;
            }
        }
    }
    return c;
}

/// Solution 2 O(n2)
const arrMerge = (a, b) => a.concat(b).sort((x, y) => +x - +y)

const A = [19,20]
const B = [1,4,5,6,7,9,10,14]


const C = mergeArr(A, B);
console.log(C)
console.assert(C.toString() == [1,  4,  5,  6,  7,  9, 10, 14, 19, 20].toString(), "Expression returned false");
