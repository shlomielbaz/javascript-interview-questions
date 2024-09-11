// const users = [
//   {
//     id: 1,
//     name: "Jack",
//   },
//   {
//     id: 2,
//     name: "John",
//   },
//   {
//     id: 3,
//     name: "Mike",
//   },
// ];
// const userStatuses = [
//   {
//     id: 1,
//     isActive: true,
//   },
//   {
//     id: 2,
//     isActive: true,
//   },
//   {
//     id: 3,
//     isActive: false,
//   },
// ];

// /* write a function which get an array and 
//   an element and return an array with this element at the end*/

// const append = (arr, el) => {};

// /* You have 2 functions which return promises. 
//   write a function getMappedData() which
//   Map data from users and userStatuses to get array of
//   users with id, name, isActive */

// const getUsers = () => {
//   return new Promise((resolve) => {
//     resolve(users);
//   });
// };

// const getUserStatuses = () => {
//   return new Promise((resolve) => {
//     resolve(userStatuses);
//   });
// };

// //console.log(users);





type User = {
  id: number;
  name: string;
};

type UserStatus = {
  id: number;
  isActive: boolean;
};

type UserResult = {
  id: number;
  name: string;
  isActive: boolean;
};
  
const users = [
  {
    id: 1,
    name: "Jack",
  },
  {
    id: 2,
    name: "John",
  },
  {
    id: 3,
    name: "Mike",
  },
];

const userStatuses = [
  {
    id: 1,
    isActive: true,
  },
  {
    id: 2,
    isActive: true,
  },
  {
    id: 3,
    isActive: false,
  },
];
  
// write a function which get an array and an element and return an array with this element at the end

const append = (arr: any[], el: any) => {
  return [...arr, el];
};
  
/* You have 2 functions which return promises. 
  write a function getMappedData() which
  Map data from users and userStatuses to get array of
  users with id, name, isActive */

const getUsers = () => {
  return Promise.resolve(users);
};

const getUserStatuses = () => {
  return Promise.resolve(userStatuses);
};
  
const getMappedData = (): Promise<UserResult[]> => {
  const users = getUsers();

  const userStatuses = getUserStatuses();

  return Promise.all([users, userStatuses]).then(([users, statuses]) => {

    const statusesMap = new Map();
    
    (statuses as UserStatus[]).forEach((status: UserStatus) => statusesMap.set(status.id, status.isActive));
    
    return (users as User[]).map((user: User) => ({ ...user, isActive: statusesMap.get(user.id) || false } as UserResult));
  });
};

const getMappedDataAsync = async (): Promise<UserResult[]> => {
  const users = await getUsers();
  const userStatuses = await getUserStatuses();
  
  const statusesMap = new Map();

  (userStatuses as UserStatus[]).forEach((status: UserStatus) => statusesMap.set(status.id, status.isActive));

  return (users as User[]).map((user: User) => ({ ...user, isActive: statusesMap.get(user.id) || false } as UserResult));
 
};


// (async () => {
//   try {
//       const text = await getMappedData();
//       console.log(text);
//   } catch (e) {
//       // Deal with the fact the chain failed
//   }
// })();

// const promise = getMappedData()


// promise.then(data => console.log(data))
console.log(getMappedDataAsync())