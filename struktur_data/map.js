// Map: tipe data yang menyimpan koleksi data dengan format key-value layaknya object.
// Yang membedakan adalah map memperbolehkan key dengan tipe data apapun, dibandingkan obejct that only allow
// key bertipe string or symbol

const myMap = new Map([
    ['1', 'a String key'],
    [1, 'a number key'],
    [true, true]
]);

console.log(myMap)

// accessing value of map using method get
const capital  = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"]
]);

console.log(capital.size);
console.log(capital.get("London"));
capital.set("New Delhi", "India");
console.log(capital.size)


const priceInJPY = 5000;

// Tulis kode di bawah ini
const currency = new Map([
    ["USD", 14000],
    ["JPY", 131],
    ["SGD", 11000],
    ["MYR", 3500]
]);

const priceInIDR = priceInJPY * currency.get("JPY")

