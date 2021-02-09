const getFirstName = (name) => {
    return name.split(' ')[2];
}

const getFirstNameShort = (name) => name.split(' ')[2];

console.log('getFirstName', getFirstName('Maria de Nazaré'));
console.log('getFirstNameShort', getFirstNameShort('Maria de Nazaré'));