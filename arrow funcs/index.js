const numbers = (...nums) => {
    let sum = nums.reduce((a, b) => a + b)
    console.log(sum)
}

numbers(10, 10, 50)