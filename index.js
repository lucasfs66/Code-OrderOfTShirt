const tshirt = (str) => {
    let array = str.split('')

    let sArray = array.filter(element => element === 's')
    let mArray = array.filter(element => element === 'm')
    let lArray = array.filter(element => element === 'l')

    let resulte = [...sArray, ...mArray, ...lArray]

    console.log(resulte.join(''))

}

tshirt('smllms')
tshirt('lms')