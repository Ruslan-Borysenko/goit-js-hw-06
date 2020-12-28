let array = [0, 1, 2, 0, 0, 5];

array = array.reduce(
  (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
  [],
);

console.log(array);
