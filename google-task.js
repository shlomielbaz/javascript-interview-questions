/*
Name  | Start | End 
----- | ----- | --- 
Abby  | 10    | 100 
Ben   | 50    | 70
Carla | 60    | 120
David | 150   | 300

Start | End | Names
----- | --- | ----------------
10    | 50  | Abby
50    | 60  | Abby, Ben
60    | 70  | Abby, Ben, Carla
70    | 100 | Abby, Carla
100   | 120 | Carla
150   | 300 | David
*/

// set start and end
// loop over the items
//

const data = [
    {
        name: 'Abby',
        s: 10,
        e: 100 
    },
    {
        name: 'Ben',
        s: 50,
        e: 70
    },
    {
        name: 'Clara',
        s: 60,
        e: 120
    },
    {
        name: 'David',
        s: 150,
        e: 300
    }
];

// const result = [
//     {
//         name: ['Abby'],
//         s: 10,
//         e: 50 
//     },
//     {
//         name: ['Abby', 'Ben'],
//         s: 50,
//         e: 60
//     },
//     {
//         name: ['Abby', 'Ben', 'Clara'],
//         s: 60,
//         e: 70
//     },
//     {
//         name: ['Abby', 'Clara'],
//         s: 70,
//         e: 100
//     },
//     {
//         name: 'Clara',
//         s: 100,
//         e: 120
//     },
//     {
//         name: 'David',
//         s: 150,
//         e: 300
//     }
// ]

const result = [];
let start = 0;
let end = 0;

data.forEach((entry, index) => {
    const { name, s, e } = entry;
    const names = [name];

    if (index > 0) {
        end = e > end ? e : end;

        for (let i = 0; i < index; i++) {

            /*
            Name  | Start | End 
            ----- | ----- | --- 
            Abby  | 10    | 100 
            Ben   | 50    | 70
            Carla | 60    | 120
            David | 150   | 300

            Start | End | Names
            ----- | --- | -----
            10    | 50  | Abby
            50    | 60  | Abby, Ben
            60    | 70  | Abby, Ben, Carla
            70    | 100 | Abby, Carla
            100   | 120 | Carla
            150   | 300 | David
            */
        
            // if (data[i].s > start && data[i].e < end) {
            //     names.push(data[i].name);
            // }
            // else 
            // if (data[i].e > s) {
            //     names.push(data[i].name);
            // }

            if (data[i].e > s) {
                names.push(data[i].name);
            }

            // index < data.length - 1 ? data[index + 1].s : e
            // console.log(start, data[index].s)

            start = data[index].e > end ? end : data[index].e < end ? data[index].s : data[index].s;
            const s_prev = data[i].s
            const e_prev = data[i].e
        }
    }
    else {
        start = s;
        end = e;
    }

    const transformedEntry = {
        name: Array.isArray(names) ? names.flat() : names,
        s,
        e: index < data.length - 1 ? data[index + 1].s : e
    };

    result.push(transformedEntry);
});

result.forEach(entry => console.log(entry.s, entry.e, entry.name));

// s = data[0] && data[0].s || Number.MIN_VALUE;
// e = data[0] && data[0].e || Number.MAX_VALUE;

// for (const item of data) {
//     if (item.s > s) {
//         s = item.s;
//     }

//     if (item.e < e) {
//         e = item.e;
//     }
// }

