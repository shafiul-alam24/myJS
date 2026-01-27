// For-In Loop (Objects (enumerable keys))
// Objects (enumerable keys)
let student = {
  name: 'Ali',
  age: 15,
  grade: 'A'
};

for (let key in student) {
  console.log(key + ': ' + student[key]);
}
