//Task 1:
class Movie{


    constructor(title,studio,rating = "PG"){
        this.title = title 
        this.studio = studio 
        this.rating = rating
    }

     get PG(){
            return this.rating;
    }
}


const leo = new Movie("Leo","7-screen Studio","PG13");
const vikram = new Movie("Vikram","Raaj Kamal Films Internaional","PG");
const baba = new Movie("Baba","AVM Production");
const tenet = new Movie("Tenet","Universal Pictures");
const casino = new Movie("Casino royal","Eon Productions","PG18");
console.log(leo);
console.log(leo.title,leo.studio,leo.rating);
console.log(vikram.title,vikram.studio,vikram.rating);
console.log(casino.title,casino.studio,casino.rating);
obj = [leo,vikram,baba,tenet,casino];
const PGrated = obj.filter((element)=>(element.PG === "PG")).map((element)=>{return element.title});
console.log(`PG rated Movies: ${PGrated}`)



console.log("--------------------------------------------------------");

//Task 2:

class Circle{
    constructor(radius=1,color="black"){
        this.radius = radius
        this.color = color 
    }
    get Radius(){
        return this.radius;
    }
    set Radius(n){
        this.radius = n;
    }
    get Color(){
        return this.color;
    }
    set Color(c){
        this.color = c;
    }
    get toString(){
        return `"Circle[Radius=${this.radius},color=${this.color}]"`;
    }
    get Area(){
        return Math.PI * this.radius * this.radius;
    }
    get Circumference(){
        return 2 * Math.PI * this.radius;
    }

}
let c1 = new Circle(3,"red");
let c2 = new Circle(5,"green");
let c3 = new Circle(1);
let c4 = new Circle(6,"White");
console.log(c1.radius,c1.color)
console.log(c4.radius,c4.color)
console.log(`Area: ${c2.Area}`);
console.log(`Circumference : ${c3.Circumference}`);
console.log("---------------------------------------------------");

//Task 3:

class Preson {
    constructor(name,age,gender,maritalStatus,contact,Email){
        this.name = name
        this.age = age
        this.gender = gender
        this.maritalStatus = maritalStatus
        this.contact = contact
        this.Email = Email
    }
}
const person1 = new Preson("john",77,"male","married",9876543210,"john2000@gmail.com");
const susi = new Preson("susi",23,"male","single",9876543210,"susisusisusi@gmail.com");
console.log(person1.name,person1.age,person1.gender,person1.maritalStatus,person1.contact,person1.Email);
console.log(susi);
console.log("-----------------------------------------------------------");

//Task 4:

class UberPrice{
    constructor(distance,price=50){
        this.distance = distance
        this.price = price
    }
    set Price(p){
        this.price = p;
    }
    get Price(){
        return this.price;
    }
    set Distace(d){
        this.distance = d;
    }
    get Distace(){
        return this.distance;
    }
    get RidePrice(){
        return this.distance * this.price;
    }
}
const ride1 = new UberPrice(11,37);
const ride2 = new UberPrice(36,43);
const ride3 = new UberPrice(10);

console.log(ride1.RidePrice);
console.log(ride2.RidePrice);
console.log(ride3.RidePrice);
