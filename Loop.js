//For loop,
// for (initalization;condition; iteration)
 

for(var m=5;m>0;m--){
    console.log(m);
    
}
var str="javascript"
for(var i=0;i<str.length;i++){
    console.log(str[i]);
    
}
var smb="java"
var store=""
for(var i=0;i<smb.length;i++){
    store+=smb[i]
}
console.log(store);

//while 
//syntax
//initalization
//while(condition)
var c=0
while(c<5){
    console.log(c);
    c++   
}
// do-while loop
var d=5
do{
    console.log(d);
    d++
    
}while(d<5)
//for each
//syntax:
//var_name.foreach((value,index,acctualarray)=>)

 const w=["Monday","Tuesday","Wednesday","Thursday"]
w.forEach((val,idx,acc)=>console.log(val,idx,acc))
const obj={
    name :"sakthi",
    city:"new york"
}
for(var x in obj){
    console.log(x,obj[x]);
    
}
//for(var_type var_name of str_name)
let sml="happy"
for(var g of sml){
    console.log(g);
    
}
