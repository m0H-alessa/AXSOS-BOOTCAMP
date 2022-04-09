module.exports = class Ninja {
  speed = 3;
  strength = 3;
  name;
  health = 0;
  constructor(name) {
    this.name = name;
  }

  sayName = () => {
    console.log(this.name);
  };
  showStatus = () => {
    console.log(
      this.name + "," + this.strength + "," + this.speed + "," + this.health
    );
  };

  drinkSake = () => {
    this.health += 10;
  };
};

const ninja1 = new Ninja("Ala");
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStatus();
