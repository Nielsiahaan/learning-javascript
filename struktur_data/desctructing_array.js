const favorites = ["Seafood", "Salad", "Nugget", "Soup"]
const [firstFood, secondFood, thirdFood, fourthFood] = favorites
console.log(firstFood)
console.log(secondFood)
console.log(thirdFood)
console.log(fourthFood)

// Destructuring assignment (pertukaran nilai)
let myFood = "Ice Cream";
let herFood = "Noodles";
[myFood, herFood] = favorites;
console.log(myFood)
console.log(herFood)

// Default values
const myFavorites = ["Seafood"]
const [myfood, herfood = "Salad"]= myFavorites;
console.log(myfood)
console.log(herfood)

