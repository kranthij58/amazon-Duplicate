class Car{
  #brand;
  #model;
  speed = 0;
  isTrunkOpen;
  constructor(carDetails){
    this.#brand = carDetails.brand;
    this.#model = carDetails.model;
  
  }
  displayInfo(){
    console.log(this.#brand);
    console.log(this.#model);
    console.log(this.speed);
    console.log(this.isTrunkOpen);
  }
  go(){
    if(this.isTrunkOpen===true){
      return
    }
    if(this.speed+5<=200){
      this.speed+=5;
    }
    
  }
  brake(){
    if(this.speed-5>=0){
      this.speed-=5;
    }
  }
  openTrunk(){
    if(this.speed===0){
      this.isTrunkOpen=true;
    }

    
  }
  closeTrunk(){
    this.isTrunkOpen=false;
  }
  
  
}


class RaceCar extends Car{
  acceleration;
  constructor(carDetails){
    super(carDetails);
    this.acceleration=carDetails.acceleration;
  }
  go(){
    if(this.speed<=300){
      this.speed+=this.acceleration;
    }

  }
  openTrunk(){
    return ;
  }
  closeTrunk(){
    return ;
  }
}
/*const car1 = new Car({brand : 'Toyota', model : 'Corolla'});
const car2 = new Car({ brand : 'Tesla' , model : 'Model 3'});
console.log(car1);
console.log(car2);

car1.go();

car1.go();
car1.brake();
car1.brake();
car1.brake();

car1.go();
car1.go();
car1.displayInfo();
car1.openTrunk();
car1.go();
car1.displayInfo();
car1.closeTrunk();
car1.displayInfo();*/
const race1 = new RaceCar({brand : 'McLaren' , model : 'F1', acceleration : 20});
console.log(race1);