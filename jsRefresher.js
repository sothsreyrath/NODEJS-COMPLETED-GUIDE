const fs = require('fs');


const set = new Set();
set.add('Daisy');
set.add('29');

console.log("SET => ", set);

const toArray = (...args) => {
    return args;
};
console.log(toArray(1, "Daisy", "Rest"))

//Destructure
const person = {
    name: "Daisy",
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
}

const printName = ({ name }) => {
    console.log(name)
}
printName (person);
const {name, age} = person
console.log(name, age)

const arrs = [1, 2 , 'daisy', '29']
const [arr1, arr2] = arrs;
console.log(arr1, arr2);

//Async Code & Promises
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, 1500)
    });
}

setTimeout(() => {
    console.log('Timer is Done!')
    fetchData().then(text => {
        console.log(text);
        return fetchData();
    })
    .then(text2 => {
        console.log(text2);
    })
}, 2000)
console.log('Hello! Sync Code')



//fs.writeFileSync('hello.json', "{'name': 'daisy',' age': '29'}")