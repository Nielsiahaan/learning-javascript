// parameter sebuah fungsi dapat berupa tipe data apapun, string, number, object even fungsi lain

const user = {
    id: 24, displayName: 'kren', fullName: 'Kylo Ren'
};

function introduce({displayName, fullName}) {
    console.log(`${displayName} is ${fullName}`);
}

introduce(user)

// default value parameter
// if default value is nothing then return undefined
function exponentsFormula(baseNumber, exponent = 2) {
    const result = baseNumber ** exponent;
    console.log(`${baseNumber}^${exponent} = ${result}`);
}

exponentsFormula(3);

// rest parameter: kebalikan dari spread operator
// menggabungakn beberapa elemen menjadi satu array
function sum(...numbers) {
    let result = 0;
    for (let number in numbers) {
        result += number;
    }
    return result;
}

console.log(sum(1, 2, 3, 4, 5))