const arrMap = [1, 2, 3];
const newArrMap = arrMap.map(item => Math.floor(Math.random() * 12) * item);
console.log(newArrMap);

const arrFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArrFilter = arrFilter.filter(item => item % 2 === 0);
console.log(newArrFilter);

const arrReduce = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArrReduce = arrReduce.reduce((acc, item) => acc + item, 0);
console.log(newArrReduce);