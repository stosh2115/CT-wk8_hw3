import {v4 as uuidv4} from 'uuid'
//Solution    
export abstract class Character {
    private weapons: Weapon [] = [];

    constructor(public name: string, public gold: number = 0) {
    }

    collectGold(amount: number): void {
        this.gold += amount;
        console.log(`${this.name} collected ${amount} gold.`);
    }

    addWeapon(weapon:Weapon): void{
        this.weapons.push(weapon);
        console.log(`${this.name} has added a ${weapon.name}!`)
        
    }

    removeWeapon(weapon1: Weapon): void{
        const index = this.weapons.indexOf(weapon1);
        if (index !== -1){
            this.weapons.splice(index, 1);
        }
    }

    printStats(): void {
        console.log(`${this.name} has this type of ${this.weapons}`)
    }

}

interface attackMechanisms{
    attack(): void;
}

interface defendingmechanisms{
    defense(): void;
}

export class Orges extends Character implements attackMechanisms, defendingmechanisms{
    constructor(name:string){
        super(name);
    }
    
    public attack(): void{
        console.log(`${this.name} fights with a club`)
    }
    
    public defense(): void{
        console.log(`${this.name} defends with a shield`)
    }
}
export class Peons extends Character implements attackMechanisms, defendingmechanisms{
    constructor(name:string){
        super(name);
    }
    
   public attack(): void{
        console.log(`${this.name} fights with a club`)
    }
    
    public defense(): void{
        console.log(`${this.name} defends with a shield`)
    }
}
export class Knights extends Character implements attackMechanisms, defendingmechanisms{
    constructor(name:string){
        super(name);
    }
    
    public attack(): void{
        console.log(`${this.name} fights with a sword`)
    }
    
    public defense(): void{
        console.log(`${this.name} defends with a armor`)
    }
}
export class Archer extends Character implements attackMechanisms, defendingmechanisms{
    constructor(name:string){
        super(name);
    }
    
    public attack(): void{
        console.log(`${this.name} fights with a bow and arrow`)
    }
    
    public defense(): void{
        console.log(`${this.name} has tunic to defend`)
    }
}

export class Weapon {
    readonly id: string;
    name: string;
    description?: string;
    damagePoints: number;

    constructor(name: string, damagePoints: number, description?: string) {
        this.id = uuidv4();
        this.name = name;
        this.description = description;
        this.damagePoints = damagePoints;
    }
}


