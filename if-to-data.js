
// a
// if a > 50
//     a > 50
//     if b > 50 
//         b > 50
//         if c > 50
//             c > 50
//         end-if 
//     else-if b > 40
//         b > 40
//     else
//         b <= 40
//     end-if 
// end-if

a > 50
    b > 50
        c > 50
        else
    b > 40
    else

b > 50
else

c > 50
else

d > 50
else


// b
// if b > 50
//     b > 50
// else
//     b <= 50
// end-if 

// c
// if c > 50
//     c > 50
// else
//     c <= 50
// end-if

// d
// if d > 50
//     d > 50
// else
//     d <= 50
// end-if


const treeCondition = [
    {a:50,b:50,c:50}, // a, b, c
    {a:51,b:51,c:51}, // a, a > 50, b > 50, c > 50, b, b > 50, c, c > 50
    {a:51,b:51,c:50}, // a, a > 50, b > 50, c > 50, b, b > 50, c

    {a:51,b:41,c:51},
    {a:51,b:40,c:51},

    {a:51,b:,c:},
    {a:51,b:,c:},
    {a:51,b:,c:},
    {a:50,b:,c:},
]

