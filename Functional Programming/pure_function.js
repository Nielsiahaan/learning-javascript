// Pure Function: konsep dari pembuatan fungsi yang mengharuskan fungsi untuk tidak bergantung terhadap nilai yang berada di luar fungsi atau parameternya

// let PI = 3.14

// const hitungLuasLingkaran = (jariJari) =>{
//    return PI * (jariJari * jariJari)
// }

// console.log(hitungLuasLingkaran(4)) // 50.24
// PI = 5; // tidak sengaja nilai PI berubah
// console.log(hitungLuasLingkaran(4)) //80

//Fungsi tersebut tidak bisa dikatakan pure function karena ia membutuhkan nilai yang berada di luar dari fungsinya,
// yakni nilai PI. Bila nilai PI berubah, maka penggunaan fungsi menghasilkan nilai yang berbeda walaupun diberikan nilai parameter yang sama.

const hitungLuasLingkaran = (jariJari) => {
    return 3.14 * (jariJari * jariJari);
}
console.log(hitungLuasLingkaran(4)); // 50.24
console.log(hitungLuasLingkaran(4)); // 50.24
console.log(hitungLuasLingkaran(8)); // 200.96
console.log(hitungLuasLingkaran(8)); // 200.96

// pure function juga dilarang keras untuk mengubah nilai yang berada di luar baik secara sengaja atau tidak sengaja
// const createPersonWithAge = (age, person) =>{
//     person.age = age;
//     return person
// }
//
// const person = {
//   name: 'Bobo'
// }
//
// const newPerson = createPersonWithAge(18, person)
//
// console.log({person, newPerson})

// to make this function pure we use destructuring object
const createPersonWithAge = (age, person) => {
    return {...person, age}
}

const person = {
    name: 'Bobo'
}

const newPerson = createPersonWithAge(18, person);

console.log({
    person,
    newPerson
});


//Agar lebih mudah dalam mengetahui apakah fungsi yang Anda buat sudah pure atau belum, pastikan 3 konsep ini ada pada fungsi yang Anda buat.
//
// Mengembalikan nilai yang sama bila inputannya (nilai parameter) sama.
// Hanya bergantung pada argumen yang diberikan.
// Tidak menimbulkan efek samping.