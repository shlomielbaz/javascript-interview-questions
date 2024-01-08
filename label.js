let j = 0;

outer:
for (let i = 0; i < 10; i++)
{ 
    console.log('For: ', i)

    if (j > 5) 
            break; // inner 

    let k = 5;
    while ( j < 10) { // inner loop
        j++
        console.log('While: ', j)
        if (j > 5) {
            break; // inner 
        }
        else {
            continue outer;  // it will go to next iteration of outer loop
        }
    }
}

console.log('Done')
