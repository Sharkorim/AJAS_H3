/**
* mediante el loop while agregar los valores
* de las claves [{a:1},{b:2},{c:3},{d:4},{e:5}]
* dentro del array result 
* 
* 
* output => [1,2,3,4,5]
*/
let arr = [{a:1},{b:2},{c:3},{d:4},{e:5}];
let result = [];

let index = 0;

while (index < arr.length) {
  let obj = arr[index];
  let value = Object.values(obj)[0];
  result.push(value);
  index++;
}

console.log(result); // Output: [1, 2, 3, 4, 5]
 
 
//export result
module.exports = result;