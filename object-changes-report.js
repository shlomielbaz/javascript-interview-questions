// Write a function provide a report of object changes in a most efficient way

function compare(oldObjects, newObjects) {
  const result = {};

  const o_new = {};
  for(let i=0; i<newObjects.length; i++) {
    o_new[newObjects[i].id] = newObjects[i];
  }

  const o_old = {};
  for(let i=0; i<oldObjects.length; i++) {
    o_old[oldObjects[i].id] = oldObjects[i];
  }

  const o_keys = Object.keys(o_old);
  const n_keys = Object.keys(o_new);
    
  console.log("updated", o_keys.filter(value => n_keys.includes(value)).map(idx => {
    if (o_new[idx].job !== o_old[idx].job) {
      return o_new[idx]
    }
  }).filter(item => item));

 console.log("new", oldObjects.filter(item => !(item.id in o_new)));
 console.log("removed", newObjects.filter(item => !(item.id in o_old)));
}


let oldObjects = [
  { id: '1', name: 'Tom Bird', job: 'Lifeguard', age: 30, salary: 82 }, 
  { id: '2', name: 'Kobi Perry', job: 'Actor', age: 18, salary: 68 },
  { id: '3', name: 'Moni Levi', job: 'VP R&D', age: 44, salary: 700 },
  { id: '5', name: 'Tal David', job: 'Devops', age: 20, salary: 100 }
]

let newObjects = [
  { id: '1', name: 'Tom Bird', job: 'Waiter', age: 31, salary: 120 }, 
  { id: '2', name: 'Kobi Perry', job: 'Actor', age: 18, salary: 68 },
  { id: '3', name: 'Moni Levi', job: 'Architect', age: 44, salary: 210 },
  { id: '4', name: 'Jacob Brener', job: 'CEO', age: 44, salary: 630 }
]

console.log(compare(oldObjects, newObjects))

/* Expected Result
  {
  new: [ 
    { id: '4', name: 'Jacob Brener', job: 'CEO', age: 44, salary: 630 } 
  ],
  removed: [ 
    { id: '5', name: 'Tal David', job: 'Devops', age: 20, salary: 100 } 
  ],
  updated: [
    { id: '3', name: 'Moni Levi', job: 'Architect', age: 44, salary: 210 },
    { id: '1', name: 'Tom Bird', job: 'Waiter', age: 31, salary: 120 }
  ]
}
*/
