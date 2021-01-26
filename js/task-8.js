import users from './users.js';
// Массив имен всех пользователей у которых есть друг с указанным именем.

const getUsersWithFriend = (users, friendName) => {
  // return users
  //   .filter(user => user.friends.indexOf(friendName) != -1)
  //   .map(user => user.name);
  return users.reduce((usersSpareFriend, { name, friends }) => {
    friends.includes(friendName) && usersSpareFriend.push(name);
    return usersSpareFriend;
  }, []);
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
