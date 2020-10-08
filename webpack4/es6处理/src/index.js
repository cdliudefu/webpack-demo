let fun = a =>console.log(a)

let objOne = {
    name:'King'
}
let objTwo = {
    name:'Json',
    age:23
}
let newObj = Object.assign(objOne,objTwo)

console.log(newObj)