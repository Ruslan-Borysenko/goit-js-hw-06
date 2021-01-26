import users from './users.js';

const getUsersWithGender = (users, someGender) => {
  // return users
  //   .filter(({gender}) => gender === someGender)
  //   .map(({name}) => name);
  return users.reduce((acc, { gender, name }) => {
    gender === someGender && acc.push(name);
    return acc;
  }, []);
};

console.log(getUsersWithGender(users, 'male'));
// [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
