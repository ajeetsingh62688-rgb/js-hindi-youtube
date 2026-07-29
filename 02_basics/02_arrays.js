const marval_hero =["thor","Ironman","spiderman"]

const dc_hero =["superman","flash","batman"]

//marval_hero.push(dc_hero)

// console.log(marval_hero);
// console.log(marval_hero[3][1]);

// const allhero=marval_hero.concat(dc_hero)
// console.log(allhero);

const all_new_hero = [...marval_hero,...dc_hero]//sprade op

//console.log(all_new_hero);


const another_array= [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);


console.log(Array.isArray("Ajeet"))
console.log(Array.from("Ajeet"))

console.log(Array.from({name:"ajeet"})) // intresting

let score1 =200
let score2 = 100
let score3= 300

console.log (Array.of(score1,score2,score3));