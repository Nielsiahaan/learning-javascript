// Array: tipe data yang dpat mengelompokkan lebih dari satu nilai dan menempatkannya dalam satu variable.

let myArray = ["Cokelat", 42.5, 22, true, "Programming"]
console.log(myArray[0])
console.log(myArray[1])
console.log(myArray[2])
console.log(myArray[3])
console.log(myArray[4])
console.log(myArray[5]) // undefined ,out of bound index
console.log("Panjang nilai myArray adalah "+myArray.length)

// adding data into array by method push
myArray.push('JavaScript');
console.log(myArray)

// Outputs the last element of the array by method pop
myArray.pop();
console.log(myArray);

// method shift to outputs the first element of the array
// method unshift to adding element into the first index of array
myArray.shift();
myArray.unshift("Apple")
console.log(myArray)


// how to delete the element of array??
delete myArray[1]
console.log(myArray)

// splice: dapat menghapus dan menambahkan element pada array
myArray.splice(2, 1);  // menghapus dari index 2 sebanyak 1 element
console.log(myArray)

const month = ['January', 'March', 'April', 'May']
console.log("before splice: ", month)

month.splice(1,0, 'February')
console.log('after splice: ', month)

let evenNumber = []

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0){
        evenNumber.push(i);
    }
}

console.log(evenNumber)