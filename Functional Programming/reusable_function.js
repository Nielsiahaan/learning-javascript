// Array Map: Fungsi ini dapat dipanggil dari sebuah data bertipe array dan menerima satu buah callback function.

const newArray = ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => {
    return `${name}!`
})

console.log(newArray)

// Array Filter:  berguna untuk melakukan proses penyaringan (filtering) terhadap nilai array yang ada.

const truthyArray = [1, '', 'Hallo', 0, null, 'Harry', 14].filter((item) => Boolean(item));

console.log(truthyArray);

// example penggunaan filter untuk menyaring array dari object siswa
const students = [
    {
        name: 'Harry',
        score: 60,
    },
    {
        name: 'James',
        score: 88,
    },
    {
        name: 'Ron',
        score: 90,
    },
    {
        name: 'Bethy',
        score: 75,
    }
];


const eligibleForScholarshipStudents = students.filter((student) => student.score > 85)
console.log(eligibleForScholarshipStudents)

// Array Reduce:  untuk mengeksekusi fungsi reducer pada setiap elemen array dan hanya mengembalikan output satu nilai saja.
const totalScore = students.reduce((acc, student) => acc + student.score, 0);

console.log(totalScore);

// Array Some
//Contoh penggunaannya misalkan kita ingin mengetahui apakah dalam deretan angka terdapat angka genap.

const array = [1, 2, 3, 4, 5];
const even = array.some(element => element % 2 === 0)

console.log(even)

// Array find: untuk mencari apakah di dalam deretan nilai terdapat nilai yang sesuai dengan kriteria yang kita definisikan pada callback function
const findJames = students.find(student => student.name === 'James');
console.log(findJames);

// array sort: melakukan pengurutan nilai dari sebuah deretan nilai
const months = ['March', 'Jan', 'Feb', 'Desc']
months.sort();
console.log(months)

const array1 = [1, 30, 4, 1000, 101, 121];
array1.sort();
console.log(array1);

const array2 = [1, 30, 4, 1000];
const compareNumber = (a, b) => {
    return a - b;
}
const sorting = array2.sort(compareNumber)
console.log(sorting)

// Array every: untuk mengecheck apakah semua nilai dari sebuah array sesuai dengan kriteria yang didefinisikan
const scores = [70, 85, 90];
const minimumScore = 65;

const examPassed = scores.every(score => score >= minimumScore);
console.log(examPassed);

// Array ForEach:  memanggil fungsi callback pada setiap iterasi index array.
const names = ['Harry', 'Ron', 'Jeff', 'Niel']
names.forEach((name) => {
    console.log(`Hello, ${name}!`)
})
