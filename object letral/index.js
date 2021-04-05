const addressMaker = (province, district) => {
    console.log(`I come from ${province} in ${district} district`)
}

addressMaker('Western province', 'Rubavu')

// with object letral example
const addressMaker2 = (province, district) => {
    // without object letral
    // const newAddress = {province: province, district: district}

    //with object letral
    const newAddress = {province, district}
    
    console.log(`I come from ${newAddress.province} in ${newAddress.district} district`)
}

addressMaker2('Northern province', 'Kamonyi')