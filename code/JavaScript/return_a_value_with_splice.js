/* create by 2019/04/26 */
/* update by 2019/04/27 */

const array = ["a", "b", "c", "d", "e", "f"];

const valueInArray = array.splice(0, 1);

console.log(valueInArray); // ["a"] 配列で返ってくる。

const value = array.splice(0, 1)[0]; // 配列ではなくデータで返して欲しい場合末尾に[0]を加える

console.log(value); // "b" １つのデータとして返ってくる

const values = array.splice(0, 2)[0]; // 2つ要素を取り除いてますが、インデックス値は0を指定してるので、返す値は1つのみです。

console.log(values);

console.log(array); //　メソッドは３回実行しましたが、要素が4つ取り除かれているのがわかります。3回目のsplice()で要素が2つ取り除かれているからです。
