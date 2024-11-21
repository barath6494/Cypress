//Async-It return the promise
//Await-It will make the promise wait

async function data(){
    try{
const waterbottel =await water()
console.log(waterbottel);
const rooms = await room()
console.log(rooms);
const garb =await trash()
    console.log(garb);
    


    }catch(e){
console.log(e);

    }
}
data()