/* create by 2019/04/26 */

const array = ["a", "b", "c", "d"];

const valueInArray = array.splice(0,1);

console.log(valueInArray); // ["a"] 配列で返ってくる。

const value = array.splice(0,1)[0]; // 配列ではなくデータで返して欲しい場合末尾に[0]を加える

console.log(value); // "b" １つのデータとして返ってくる