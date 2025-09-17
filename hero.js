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
    useAbility(){
        console.log(`${this.name} used Power Strike`);
    }
}


const hero2 = new Hero("Gandalf",100,8);
const Thorin = new Warrior("Thorin",100,10);

Thorin.useAbility();