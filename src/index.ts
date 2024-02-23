import { Orges, Peons, Knights, Archer, Weapon } from "./shapes";

const ogre = new Orges('Ogre1');
const peon = new Peons('Peon1');
const knight = new Knights('Knight1');
const archer = new Archer('Archer1');

const sword = new Weapon('Sword', 10);
const bow = new Weapon('Bow', 8);


ogre.addWeapon(sword);
archer.addWeapon(bow);
ogre.attack();
archer.defense();
peon.addWeapon(sword);
knight.addWeapon(sword)