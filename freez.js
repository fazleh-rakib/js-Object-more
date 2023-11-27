const bottle ={
    color : 'blue',
    price: 50,
    isCleaned: true,
    capacity : 1
}

const key = Object.keys(bottle)
console.log(key);
const valus = Object.values(bottle)
console.log(valus);
Object.freeze(bottle)
bottle.price = 100   
bottle.height = 10  
console.log(bottle);   