class Car {
    constructor(brand, color, maxSpeed) {
        this.brand = brand
        this.color = color
        this.maxSpeed = maxSpeed
    //     set a random chassis number
        this.chassisNumber = `${brand} - ${Math.floor(Math.random()*1000)+1}`
    }
}
const car1 = new Car('BMW', 'red', 200);
const car2 = new Car('Audi', 'blue', 220);
const car3 = new Car('BMW', 'black', 250);
console.log(car1);
console.log(car2);
console.log(car3);

// meskipun sudah di set default value dari chassisNumber namun user masih dapat mengubah value dari properti tersebut
car1.chassisNumber = 'BMW-1';
console.log(car1);

// solusi dari masalah tersebut adalah menggunakan setter getter method
// setter and getter method
// method getter harus mengembalikan sebuah nilai dan nilai tersebut akan menjadi nilai properti;
// method setter harus menerima satu argumen yang nilainya diambil dari operand ke dua ketika melakukan assignment operator.

//Data property merupakan properti yang sejauh ini kita lihat, properti yang langsung menampung sebuah nilai di dalam sebuah objek.
// Sedangkan accessor property merupakan properti yang dikontrol oleh sebuah getter dan setter. Nilai yang didapatkan dari properti tersebut dikontrol oleh method get dan cara menetapkan nilai tersebut dikontrol oleh method set

class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName(){
        return `${this.firstName}${this.lastName}`
    }

    set fullName(fullName){
        const[firstName, lastName] = fullName.split(' ');
        this.firstName = firstName
        this.lastName = lastName
    }
}

const user = new User('John', 'Doe')
console.log(user)
console.log(user.fullName)

user.fullName = 'Daniel Siahaan'
console.log(user)
console.log(user.fullName)

// example
class Cars {
    constructor(brand, color, maxSpeed) {
        this.brand = brand;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this._chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
    }

    get chassisNumber() {
        return this._chassisNumber;
    }

    set chassisNumber(chassisNumber) {
        console.log('you are not allowed to change the chassis number');
    }
}

const car = new Cars('BMW', 'red', 200);
console.log(car.chassisNumber);
car.chassisNumber = 'BMW-1';
console.log(car.chassisNumber);
