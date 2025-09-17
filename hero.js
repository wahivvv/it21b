class Hero{
    #health

    constructor(name,health,attack){
        this.name = name;
        this.#health = health;
        this.attack = attack;
    }

    getName() {
        return this.name;
    }

    getHealth(){
        return this.#health;
    }

    showStats(){
        console.log("Name: "+this.name);
        console.log("Health: "+this.#health);
        console.log("Attack: " + this.attack);
        console.log("-------------------------")
    }
}
class Warrior extends Hero {
@@ -28,9 +27,27 @@
    }
}

class Mage extends Hero {
    constructor(name,health,attack,mana){
        super(name,health,attack);
        this.mana = mana;
    }

const Thorin = new Warrior("Thorin",100,10);
const hero2 = new Hero("Gandalf",100,8);
    useAbility(){
        console.log(`${this.name} casts Fireball`);
    }

    showStats(){
        super.showStats();
        console.log("Mana: "+ this.mana);
    }

}

const Thorin = new Warrior("Thorin",100,10);
const Gandalf = new Mage("Gandalf",100,8,50);

Thorin.useAbility();
//Thorin.showStats();
//Thorin.useAbility();
Gandalf.showStats();
Gandalf.useAbility();