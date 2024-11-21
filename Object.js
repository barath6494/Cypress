let obj={
    name:"Barath",
    age:30,
    city:"cennai"

}

//update the value
obj.name="karthik"
console.log(obj);
//get the value
console.log(obj.age);
console.log(obj.city);

// Keys:use to take the key values 
var key=Object.keys(obj)
console.log(key);
//value:
var value=Object.values(obj)
console.log(value);
let ofc=[
    {
        name:"Barath",
        age:30,
        city:"cennai",
    },
    {
        name:"Barath",
        age:30,
        city:"cennai",
    },
    {
        name:"Barath",
        age:30,
        city:"cennai",
    },
];
console.log(ofc);
//object destructuring in JS allows you to extract multiple properties
//from an object and assign them to the varaiables in concise and readable way
var obj2={
    name:"hari",
    age:20,
    city:"chennai"
}
let{name,age,city}=obj2
console.log(name);
//this
