// Closure: fungsi yang dapat mengakses variable di dalam lexical scopenya
//  Lexical scope: sebuah fungsi bersarang, fungsi yang berada di dalan memiliki akses ke variable yang di linkup induknya

function init() {
    const name = 'Obi Wan'; // variable lokal di dalam scope fungsi init
    function greet() { // Inner function, merupakan contoh closure
        console.log(`Halo, ${name}`); // Memanggil variabel yang dideklarasikan di parent function
    }

    return greet;
}
const myFunction = init();
myFunction();

// Closure memungkinkan kita membuat fungsi dan variable seolah menjadi private.
const add = () =>{
    let counter = 0;
    return () =>{
        return ++counter
    };
}
const addCounter = add();
console.log(addCounter())
console.log(addCounter())
console.log(addCounter())