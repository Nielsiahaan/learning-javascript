function multiply(a, b) {
    return a * b;
}
//  Parameter: variable yang didefinisikan sebagai input of a function
// argument merupakan nilai yang dimasukkan ke dalam fungsi
let result =  multiply(3, 4)
console.log(result)

// function greeting(name, language) {
//     if (language === "English") {
//         console.log(`Good Morning ${name}!`);
//     } else if (language === "French") {
//         console.log(`Bonjour ${name}`)
//     } else {
//         console.log(`Selamat Pagi ${name}`)
//     }
// }
//
// greeting("Harry", "French")

function greeting(name, language) {
    if(language === "English") {
        return `Good Morning ${name}!`
    } else if (language === "French") {
        return `Bonjour ${name}!`;
    } else {
        return `Selamat Pagi ${name}!`;
    }
}

let greetingMessage = greeting("Harry", "French");
console.log(greetingMessage);

// Expression adlaah kode yang mengembalikan nilai
// Sehingga expression function dapat disimpan pada variable
