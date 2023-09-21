/**
* mediante el loop for agregar los valores
* de las claves [{a:1},{b:2},{c:3},{d:4},{e:5}]
* dentro del array result 
* 
* 
* output => [2,3,4]
*/

//let arr = [{a:1},{b:2},{c:3},{d:4},{e:5}];
//let result = [];

const arr = [{a:1},{b:2},{c:3},{d:4},{e:5}];
const result = [];

for (let i = 0; i < arr.length; i++) {
  const obj = arr[i];
  
  for (let key in obj) {
    if (obj[key] >= 2 && obj[key] <= 4) {
      result.push(obj[key]);
    }
  }
}

console.log(result);

module.exports = result;