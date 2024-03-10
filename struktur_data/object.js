// ex 1
const user = {
    firstName: "Luke",
    lastName: "Skywalker",
    age: 19,
    isJedi: true,
    "home world": "Tattooine"
};

console.log(`Halo, nama saya ${user.firstName}${user.lastName}`)
console.log(`Umur saya ${user.age} tahun.`)
console.log(`Saya berasal dari ${user['home world']}`)

// ex 2
const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
};

// Manipulate value of color
spaceship.color = "Glossy red";
spaceship["maxSpeed"] = 1300;
console.log(spaceship);

// delete property in object

delete spaceship.manufacturer;
console.log(spaceship)

