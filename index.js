// Variable
var id = 3;
var name = `Artdvp id= ${id}`;
var ok = true;

// Complex
// Object, Array, Function

// Object
var student = {
    code: '001',
    name: 'Artdvp'
}

student["age"] = 25;
delete student.age;

console.log(student.code)
console.log(student["name"])
console.log(student.aaa); // undefined

// Array
var list = ['aaa', 1, {
        id: 1
    },
    ['AAAA']
]

for (let i = 0; i < list.length; i++) {
    const element = list[i];
    console.log(element);
}

// splice
var data = ['A', 'B', 'C', 'D']

/*
data.splice(data.length, 0, 'E') // ABCDE
data.splice(data.length-1, 1) // ABC
data.splice(0,1) // BCD
data.splice(0,0,'X') // XABCD
*/

// JSON.stringify, JSON.parse
let stri = JSON.stringify(student);
console.log(JSON.stringify(student))

let par = JSON.parse(stri)
console.log(par)

let student1 = {
    id: 1,
    name: {
        list: [1]
    }
}
// copy object
let student2 = JSON.parse(JSON.stringify(student1))

student2.id = 2
console.log(student1.id)