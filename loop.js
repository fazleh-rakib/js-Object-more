const bottle ={
    color : 'blue',
    price: 50,
    isCleaned: true,
    capacity : 1
}
// for in loop  use for objects

const keys = Object.keys(bottle)
for (const key of keys) {
    
    console.log(key ,bottle[key]);
}

const array = [1,2,5,6]
for (const number of array) {
    console.log(number);
}

// for of use for aarray  