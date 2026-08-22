// for of 

// ["","",""]
//[{},{},{}]


const arr = [1,2,3,4,5]
for (const num of arr){
    // console.log (num);
}



const greetings = "hello world!";

for (const greet of greetings) {
if (greet == " "){
    continue;
}

    //console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map ()
map.set('IN',"India ")
map.set ('USA',"United States of America")
map.set( 'Fr',"France" )
map.set('IN',"India ")

//console.log(map);

for (const [key,value] of map){
    console.log(key,':-',value);

}

const myobject = {
    'game1':'NFS',
    'game2':'FIFA',
    'game3':'COD',
}

// for (const [key,value] of myobject ){
//     console.log(key,':-',value);
// }