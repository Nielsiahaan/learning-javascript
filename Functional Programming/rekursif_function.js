// Rekursif merupakan teknik pada sebuah function yang memanggil dirinya sendiri.

// example
const countDown = start => {
    console.log(start)
    if (start > 0) countDown(start - 1)
}

countDown(10)