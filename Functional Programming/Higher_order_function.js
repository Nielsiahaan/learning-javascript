// Higher-Order Function menjadi bagian konsep pada paradigma FP. Higher-Order Function merupakan fungsi yang dapat menerima fungsi lainnya pada argumen; mengembalikan sebuah fungsi; atau bahkan keduanya.
//
// Teknik Higher-Order Function biasanya digunakan untuk:
//
// Mengabstraksi atau mengisolasi sebuah aksi, event, atau menangani alur asynchronous menggunakan callback, promise, dan lainnya.
// Membuat utilities yang dapat digunakan di berbagai tipe data.
// Membuat teknik currying atau function composition.

const names = ['Harry', 'Ron', 'Jeff', 'Thomas']

const arrayMap = (arr, action) => {
    const loopTrough = (arr, action, newArray = [], index = 0) => {
        const item = arr[index]
        if (!item) return newArray
        return loopTrough(arr, action, [...newArray, action(arr[index]), index + 1])
    }

    return loopTrough(arr, action)
}

const newNames = arrayMap(names, (name) => `${name}!`)

console.log({
    names,
    newNames,
});