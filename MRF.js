//MRF
//MAP
//syntax
const num=[1,2,3,4,5,6,7]
const find=num.map((v,u,x)=>v*2)
console.log(find);
//Reduce
const z=[1,2,3,4,5,6,7,8,9,10]
let r=z.reduce((q,e,t,h)=>{
    return q+e
},4)
console.log(r);
//filter
const s=z.filter((qw,er,rt)=>qw%2==0)
console.log(s);

