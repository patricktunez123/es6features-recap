const arrayOne = ['One', 2, 3, 'True', 4];
const arrayTwo = [...arrayOne]

arrayTwo.push(5, 6, 7)

console.log(`This is the orginal array one: ${arrayOne}`)
console.log(`This is the copy of array one and other elements of array two: ${arrayTwo}`)