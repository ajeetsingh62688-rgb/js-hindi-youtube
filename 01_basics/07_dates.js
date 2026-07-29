//Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreateddate = new Date(2026,6,29)
// console.log(myCreateddate.toString());

// let myCreateddate = new Date(2026,6,29,12,58)
// console.log(myCreateddate.toLocaleString());

let myCreatedDate = new Date("07-29-2026")

// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now ()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

// `&{newDate.getday()} and the time `

newDate.toLocaleString('default',{
    weekday: "long"
   
})





