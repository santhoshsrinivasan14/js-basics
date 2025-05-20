const name ='santhosh'
const intrestRate=0.3;
 console.log(intrestRate);

let person = {name: 'santhosh',
    age:26
};
console.log(person)
person.name = 'santhosh srinivasan';
person['age'] = 27;

console.log(person.name);
console.log(person.age);

//js arrays
let selectedColors=['red','blue'];
selectedColors[2]='10';
console.log(selectedColors[1]);
console.log(selectedColors[2]);
console.log(selectedColors);

//functions
function greet(name,lastName) {
    console.log('Hello ' + name + ' '+lastName);
}

greet('santhosh','srinivasan');

//calculating area of circle
function calculatedArea(radius) {
    return 3.14 * radius * radius;
}

let rad = calculatedArea(24);
console.log(rad)
console.log(calculatedArea(10));
