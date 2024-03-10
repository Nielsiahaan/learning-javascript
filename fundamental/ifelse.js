const isRaining = true

console.log("Persiapan sebelum berangkat kegiatan")
if (isRaining){
    console.log("Hari ini hujan. Bawa payung.");}
console.log("Berangkat kegiatan.");



// example
let language = "French";
let greeting = "Selamat Pagi"

if(language === "English") {
    greeting = "Good Morning!";
} else if(language === "French") {
    greeting = "Bonjour!"
} else if(language === "Japanese") {
    greeting = "Ohayou Gozaimasu!"
}

console.log(greeting);


// ternary operation
// condition ? true expression : false expression

const isMember = false;
const discount = isMember ? 0.1 : 0;
console.log(`Anda mendapatkan diskon sebesar ${discount * 100}%`)