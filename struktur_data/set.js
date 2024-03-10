// Set: bersifat uni dan tidak ada duplikasi. Set tidak berurutan dan juga tidak diindeks.

const numberSet = new Set([1, 4, 6,4, 1])
numberSet.add(5);
numberSet.add(10);
numberSet.add(6);

console.log(numberSet)

// delete set
numberSet.delete(5);
console.log(numberSet)