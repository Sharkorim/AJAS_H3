//const result = require("../hack_9/hack_9");

/**
* en result, reflejar con un objeto literal, la integración
* de los datos en un sola estructura
*
* 1) la propiedad name, modificar el valor a capital
* 2) la propiedad roles, implementar en 1 array con los items en mayúscula
* 3) la prapiedad skills, solo los items HTML y CSS van en mayúscula, del resto en capital
* 4) la porpiedad levels, transformar los valores de l-1 en L1
*  
*
* output => {
    id:100,
    name:"Foo",
    roles:["ADMIN","SUPER_USER","USER"],
    skills:["Git","Github","Javascript","HTML","CSS","Docker","Python","Flask","React","Redux","Deploy"],
    levels:[{LEVEL:"L1"},{LEVEL:"L2"}, {LEVEL:"L3"}]
}
*/
let foo = {
    id:100,
    name:"foo",
    roles:["admin"],
    skills:["javascript","html","css","python","flask","react","redux"],
    alias:"super alias",

};

let roleSuperUser = "SUPER_USER";
let roleUser = "USER";
let skills = ["git","github","docker","deploy"];
let levels = [{LEVEL:"l-1"},{LEVEL:"l-2"},{LEVEL:"l-3"}];

let result = {

    id: foo.id,

    name: foo.name.charAt(0).toUpperCase() + foo.name.slice(1),

    roles: [foo.roles[0].toUpperCase(), roleSuperUser, roleUser],

    skills: ["Git","Github","Javascript","HTML","CSS","Docker","Python","Flask","React","Redux","Deploy",],

    levels: levels.map((level) => {
        if (level.LEVEL.toLowerCase() === "l-1") {
            return { LEVEL: "L1" };
        } if (level.LEVEL.toLowerCase() === "l-2") {
            return { LEVEL: "L2" };
        } if (level.LEVEL.toLowerCase() === "l-3") {
            return { LEVEL: "L3" };
        } else {
            return level;
        }
    }),
};

console.log(result);

//export result
module.exports = result; 
