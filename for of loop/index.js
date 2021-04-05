// I can loop through my name and display each char of it with for of loop
const myFullName = "PATRICK TUNEZERWANE"
for (const char of myFullName){
    console.log(char)
}

// bonus 1
 for (let char of myFullName){
     console.log(`Char code for ${char} is ${char.charCodeAt(0)}`)
 }