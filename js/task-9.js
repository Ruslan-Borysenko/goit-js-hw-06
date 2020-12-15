import users from './users.js';

const getNamesSortedByFriendsCount = users => {
  const sortByFriendsCount = (a, b) => a.friends.length - b.friends.length;
  const result = users.sort(sortByFriendsCount).map(user => user.name);
  return result;
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
