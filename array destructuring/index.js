const arr = ['Patrick', 'TUNEZERWANE'];

// accessing the array without the destructing
console.log(`My name is ${arr[0]} ${arr[1]}`)

// accessing the array with destructuring
// no need to use the indexes  to access elements

const [fistName, lastName] = arr;
console.log(fistName, lastName)
console.log(`My name is ${fistName} ${lastName}`)