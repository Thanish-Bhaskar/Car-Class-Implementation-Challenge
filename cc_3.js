//U08201790
//CREATING A CLASS
class Car{
constructor (make,speed){
this.make=make;
this.speed=speed;
console.log(`The car is a ${make} driving ${speed} kmph`)
}
//ACCELERATION
accelerate(){
    this.speed= this.speed+10;
    console.log(`The acceleration is ${this.speed} kmph`);
    return this.speed+10;
}
//BRAKING
brake(){
 this.speed=this.speed-5;
 console.log(`The slowed down speed is ${this.speed}kmph`)
 return this.speed;   
}
}
// SAMPLE VALUE TESTING
let car1 = new Car("BMW",120);
car1.accelerate(); 
car1.accelerate();
car1.brake(); 
car1.brake();      
let car2 = new Car("Mercedes",95)
car2.accelerate();
car2.accelerate(); 
car2.brake();      
car2.brake();  