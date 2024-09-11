// Q1
function getAsync(timeOut) {
    return new Promise(resolve => setTimeout(resolve, timeOut));
}


// Q2
const users = {
    1: {
        name: 'Tim Berners-Lee',
        id: 1,
        email: 'tim@outlook.com',
        teams: []
    },
    2: {
        name: 'Brendan Eich',
        id: 2,
        email: 'brendan@outlook.com',
        teams: [1,3]
    },
    3: {
        name: 'Ryan Dahl',
        id: 3,
        email: 'ryan@outlook.com',
        teams: [1,2,4]
    },
    4: {
        name: 'Douglas Crockford',
        id: 4,
        email: 'douglas@outlook.com',
        teams: [1,5,6]
    }
};


// const teams = {
//     1: [2, 3, 4],
//     2: [3],
//     3: [2],
//     4: [3],
//     5: [4],
//     6: [4],
// }

// create teams data
const teams = {};
for(const key in users) {
    const user = users[key]
    user && user.teams && user.teams.forEach(element => {

        if (element in teams) {
            teams[element].push(key)
        }
        else {
            teams[element] = [key];
        }
    });
}


const msg = {
    text: 'Hey all!! Are you coming to Denoland',
    sender: 3,
    mentioned: {
        users: [1],
        teams: [3,4]
    }
}

function sendNotification(name, text, email) {
    console.log(`Sending mail to - ${name}<${email}>`);
}

function notify(msg) {
    const teamKeys = [...msg['mentioned']['teams']] || [];
    let results = [...msg['mentioned']['users']] || [];

    for(const key of teamKeys) {
        results = results.concat(teams[key]);
    }
    
    for(const key of results) {
        sendNotification(users[key].name, msg.text, users[key].email)
    }
}

notify(msg);





















/*






* */