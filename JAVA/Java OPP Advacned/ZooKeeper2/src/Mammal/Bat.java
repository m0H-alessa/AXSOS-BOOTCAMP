package Mammal;

public class Bat extends Mammal {

	public Bat() {
		this.energyLevel = 300;
	}

	public void fly() {
		System.out.println("WOOSH WOOSH");
		energyLevel -= 50;
	}

	public void eatHumans() {
		System.out.println("Delicious human!");
		energyLevel += 25;
	}

	public void attackTown() {
		System.out.println("Burning Town");
		energyLevel -= 100;
	}
}