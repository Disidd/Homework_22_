function Human(name, age) {
  this.name = name;
  this.age = age;
}

Human.prototype.getInfo = function() {
  console.log(`Name: ${this.name}, age: ${this.age}`);
}

function Car(manufacturer, model, year, power, owner) {
  this.manufacturer = manufacturer;
  this.model = model;
  this.year = year;
  this.power = power;
  if (owner.age >= 18 && owner instanceof Human) {
    this.owner = owner;
  } else {
    console.log(owner instanceof Human ? 'Owner needs to be 18 years or older' : 'no owner');
  }
}

Car.prototype.getInfo = function() {
  console.log(`Manufacturer: ${this.manufacturer}, model: ${this.model}, year: ${this.year}, power: ${this.power}`);
  if (this.owner) {
    console.log('Owner:');
    this.owner.getInfo(); 
  } else {
    console.log('No owner.');
  }
}

const human1 = new Human('Dima', 17);
const car1 = new Car('BMW', 'X5', '2024', 300, human1);


human1.getInfo()
car1.getInfo()