class Person {

    constructor(fullName,favColor) {
        this.name = fullName;
        this.favoriteColor = favColor;
    }

    
    greet() {
        console.log("Hi," + this.name + " ma neighbor " + this.favoriteColor);
    }
}

export default Person;