const addTwo = function (num) {
  return num + 2;
};

const addS = function (word) {
  return word + "S";
};

const map = function (array, addTwo) {
  const newarray = [];
  for (const item of array) {
    newarray.push(addTwo(item[0]));
  }
  return newarray;
};

console.log(map[(1, 2, 3)], addTwo);
