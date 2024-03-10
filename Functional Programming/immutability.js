// Immutability: Sebuah object tidak boleh diubah setelah object dibuat.

const names = ['Harry', 'Ron', 'Jeff', 'Thomas']

const newNamesWithExcMark = names.map((name) => `${name}!`)
console.log({
    names,
    newNamesWithExcMark
})


//Lantas, bagaimana bila kita benar-benar perlu mengubah nilai dari sebuah objek? Contohnya seperti ini:
// const user = {
//     firstname: 'Harry',
//     lastName: 'Protter', // ups, typo!
// }
//
// const renameLastNameUser = (newLastName, user) => {
//     user.lastName = newLastName;
// }
//
// renameLastNameUser('Potter', user);
//
// console.log(user);

const user = {
    firstName: 'Harry',
    lastName: 'Protter', // ups, typo
}

const createUserWithNewLastName = (newLastName, user) => {
  return {...user, lastName: newLastName}
}

const newUser = createUserWithNewLastName('Potter', user)
console.log(newUser)