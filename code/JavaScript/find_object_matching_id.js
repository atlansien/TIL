/* create at 2019/04/27*/

const array = [
  { id: 1, data: `data 1` },
  { id: 2, data: `data 2` },
  { id: 3, data: `data 3` }
];

const id = 1;

const target = array.findIndex(obj => id === obj.id);

console.log(array[target]);
