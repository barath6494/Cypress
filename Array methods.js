//Push
var b=["kamal","Vijay","Kumar"]
b.push("barath")
console.log(b);
//Pop: to remove th values in array
b.pop()
console.log(b);
//unshift: add the vale in the 1st in the array
var d=["barath","kamal","sai"]
d.unshift("Vijayalakshmi")
console.log(d);
//shift:remove the 1st value in the array
d.shift()
console.log(d);
//concat:It will merge 2 r more array
var veg=["Carret","Tomato"]
var Fruite=["Apple","Orrange"]
var cover=veg.concat(Fruite)
console.log(cover);
//Sort
let h=[2,5,4,6,8,1,7]
h.sort((a,b)=>a-b)
console.log(h);

var name=["Kumar","Anand","Barath","Vijay"]
name.sort()
console.log(name);

//Split
var spl="good morning"
var spl1=spl.split(" ")
console.log(spl1);
// join
var j=spl1.join(" ")
console.log(j);
//Revese
var e="javascript"
var t=e.split("").reverse().join("")
console.log(t);
//slice
var birds=["parrot","peacock","pigeon","eagle","Vulture"]
var s1=birds.slice(3,-1)
console.log(s1);
//Splice
var week=["Sunday","monday","Tuesday","Thursday","Saturday"]
week.splice(3,0,"Wednesday")
week.splice(5,0,"Friday")
console.log(week);
//Include: is used to find the string r data is available in the the given string
var inc="javascript"
var i2=inc.includes("java")
console.log(i2);
//indexof
var id="Annanagar"
console.log(id.indexOf("A"));
//last index
var id="Annanagar"
console.log(id.lastIndexOf("a"));
//touppercase:
var up="omr"
console.log(up.toUpperCase());
//lowercase
var lo="OMR"
console.log(lo.toLocaleLowerCase());
