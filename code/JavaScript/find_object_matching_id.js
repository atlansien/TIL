/* create at 2019/04/27 */

const array = [
  { id: 1, data: `data 1` },
  { id: 2, data: `data 2` },
  { id: 3, data: `data 3` }
];

const id = 1; // idの値が「1」のオブジェクトを取り出したい

const target = array.findIndex(obj => id === obj.id); // idと合致するobj.idを探す、見つかった場合、そのobjのインデックス値を返す

console.log(array[target]);
