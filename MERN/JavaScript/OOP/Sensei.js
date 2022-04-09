const Ninja = require("./Ninja");
class Sensei extends Ninja {
  wisdom = 10;
  constructor() {
    super("Samaher");
    this.health = 200;
    this.speed = 10;
    this.strength = 10;
  }

  speakWisdom = () => {
    this.drinkSake();
    console.log("I'm very wise");
  };
}

const sensei = new Sensei();
sensei.speakWisdom();
sensei.showStatus();
