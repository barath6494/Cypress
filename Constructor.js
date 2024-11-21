function Bike(name,model,year){
    this.Bikename=name
    this.Bikemodel=model
    this.Bikeyear=year
}const det1=new Bike("Yamaha","RX100",2011)
console.log(det1);
//class
class student{
    constructor(name,age,std){
        this.name=name
        this.age=age
        this.std=std
    }
    studentdetails(){
        console.log(`the name is ${this.name} age is ${this.age} and std is ${std}`);
        
  
    }
}
const det=new student("gopal",13,"v")
console.log(det);
det.studentdetails