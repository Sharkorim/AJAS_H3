/**
* agregar al objeto result la propiedad role 
* 
* 
* output => {
    id:100,
    name:"foo",
    role:"admin"
};
*/
let role = "admin";

 
var result = {id: 100, name: "foo"}; // Step 1

result.role = "admin"; // Step 2

console.log(result); // Step 3

//export result
module.exports = result; 
