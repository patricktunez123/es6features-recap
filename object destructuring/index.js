const personalInformation = {
    firstName: 'Patrick',
    lastName: 'TUNEZERWANE',
    age: 22,
    country: 'Rwanda',
    city: 'Kigali'
}

// accessing the object withou destructring
console.log(`My name is ${personalInformation.firstName} ${personalInformation.lastName}`)

// accessing the object with destructuring
// no need to use the personalInformation.key any more
// it's clean

const {firstName, lastName, age, country} = personalInformation;
console.log(`My name is ${firstName} ${lastName} and I'm ${age} year old, I come from ${country}`)
