// spread operator menyebarkan nilai array untuk membantu pengelolaan array menjadi lebih mudah.
// ditandai dengan tiga titik (...)

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
console.log(favorites)

console.log(...favorites)

// spread operator dapat menggabungkan dua buah array ke dalam array baru.
const others = ["Cake", "Pie", "Donut"]

const allFavorites = [favorites, others]
console.log(allFavorites)

// combine two arrays using spread operator
const allFavorite = [...favorites, ...others]
console.log(allFavorite)


// combine few object literals
const obj1 = {firstName: 'Obi-Wan', age: 30}
const obj2 = {lastName: 'Kenobi', gender: 'M'}

const newObj = {...obj1, ...obj2}
console.log(newObj)

const oneTwoThree = [1, 2, 3];
const sevenEightNine = [7, 8, 9];

const result = [4, 5, 6, ...oneTwoThree, ...sevenEightNine];

console.log(result);