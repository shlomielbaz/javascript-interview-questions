Array.prototype.popRandom = function () {
  const index = Math.floor(Math.random() * this.length);
  return this.splice(index, 1)[0];
};

function game(list) {
  const result = {};
  let value = list.popRandom();
  const first = value;

  while (list.length) {
    const key = list.popRandom();
    result[key] = value;
    value = key;
  }

  result[first] = value;

  return result;
}

console.log(game(["Adi", "Guy", "Mor", "Noy"]));

/**
 * 
 * 

// const bigList = ['Adi', 'Guy', 'Mor', 'Noy'];
// const team = {
//     Adi, Mor, Noy
// }
// Remove my self from the list
// After gnum was pair to gaint it will remove from the big list
// get giant => ['Adi', 'Guy', 'Mor', 'Noy'] => 1 => Guy
// get gnome => ['Adi', 'Mor', 'Noy'] =>  2 => Noy
// result['Guy'] = 'Noy'

// get giant => ['Adi', 'Mor', 'Noy'] => 2 => Noy
// get gnome => ['Adi', 'Mor', 'Guy'] =>  1 => Mor
// result['Guy'] = 'Noy'
// result['Noy'] = 'Mor'


// gives[rand1] = rand2


Array.prototype.peekRandom = function(){
    const index = Math.floor(Math.random() * this.length);
    return this[index];
}

Array.prototype.popRandom = function() {
    const index = Math.floor(Math.random() * this.length);
    return this.splice(index, 1)[0];
}

function game (list) {
    // convert the list into dictionary
    const gives = new Map();
    const gets = new Map();
    const result = {}

    for (const item of list) {
        gives.set(item, false);
        gets.set(item, false);
    }

    while(list.length) {        
        const key = list.popRandom();
        let value = '';
        if (list.length > 1) {
            value = list.peekRandom();
        }
        else {
            value = list[0];
        }
        
        result[key] = value;
    }
    console.log('result: ', result)
}

game(['Adi', 'Guy', 'Mor', 'Noy']);


 * 
 */
