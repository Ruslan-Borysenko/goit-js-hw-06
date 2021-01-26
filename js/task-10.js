import users from './users.js';

const getSortedUniqueSkills = users => {
  const allSkills = users.reduce((totalSkills, { skills }) => {
    totalSkills.push(...skills);
    return totalSkills;
  }, []);
  return [...new Set(allSkills)].sort();
};

console.log(getSortedUniqueSkills(users));

// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
