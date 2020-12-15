import users from './users.js';

const getSortedUniqueSkills = users =>
  // 1. get arr of skills
  users.reduce((totalSkills, user) => {
    totalSkills.push(...user.skills);

    // 2. remove duplicate skills
    let uniq = [...new Set(totalSkills)];

    // 3. sorf A-Z
    const result = uniq.sort();
    return result;
  }, []);

console.log(getSortedUniqueSkills(users));

// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
