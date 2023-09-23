/**
* eliminar del objeto result la propiedad role 
* 
* 
* output => {
    id:100,
    name:"foo",
};
*/
var result = {id: 100, name: "foo", role: "admin"}; // Step 1

delete result.role; // Step 2

console.log(result); // Step 3};



 
//export result
module.exports = result; 
