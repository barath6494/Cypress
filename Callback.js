//callback:Pasing the fuction into the another function arguments

function name(){
    console.log("JAI");
    
}
function greets(x){
    console.log("Hello Welcome");
    x()
}
greets(name)

function task1(x){
    console.log("Task1");
    x()
    
}
function task2(y){
    console.log("Task2");
    y()
    
}
function task3(z){
    console.log("Task3");
    z()
    
}
function task4(){
    console.log("Task4");
    
    
}
task1(()=>{
    task2(()=>{
        task3(task4)
    })
})
//callback hell