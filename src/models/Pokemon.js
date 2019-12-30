import PokemonLvlsTable from "./PokemonLvlsTable";

export default class Pokemon {
    set curentHp(value) {
        this._curentHp = value;
    }
    get curentHp() {
        return this._curentHp;
    }

    constructor(id, name, baseXp, types, baseStats, spells, description) {
        this.name = name;
        this.id = id;
        this.baseXp = baseXp;
        this.types = types;
        this.baseStats = baseStats;
        this.curentXp = baseXp;
        this.spells = spells;
        this.statut = "OK";
        this.curentHp = baseStats.hp.current;
        this.spriteBackUrl = (`http://www.pokestadium.com/sprites/xy/back/${this.name}.gif`);
        this.spriteFrontUrl = (`http://www.pokestadium.com/sprites/xy/${this.name}.gif`);
        this.description = description;
    }

    getId() {
        return this.id;
    }

    getDescription() {
        return this.description;
    }

    getName() {
        return this.name;
    }

    getBaseXp() {
        return this.baseXp;
    }

    getTypes() {
        return this.types;
    }

    getBaseStats() {
        return this.baseStats;
    }

    getCurentXp() {
        return this.curentXp;
    }

    getCurentHp() {
        return this.curentHp;
    }

    setCurentHp(hp) {
        this.curentHp = hp;
    }

    setLevel(lvl) {
        this.curentXp = PokemonLvlsTable[lvl]; //faire récompense de level up
    }

    getLevel(){
        for (let level = 0; level < 100; level++) {
            const expNeeded = Math.pow((level), 3);
            if (this.curentXp > expNeeded / 2 && this.curentXp < expNeeded + (expNeeded / 2)) {
                return level + 1;
            }
        }
    }

    takeDamages(damages){
        this.curentHp = this.curentHp - damages;
        if (this.curentHp <= 0 ){
            this.curentHp = 0;
            this.statut = "KO"
        }
    }

    attackPokemon(target, attackName){
        const attack = this.getSpells().find(element => element.getName() === attackName);
        let damages = ((((this.getLevel() * 0.4 + 2) * this.baseStats.attack.current * attack.getPower()) / (target.baseStats.defense.current * 50) + 2));
        damages = Math.floor(damages);
        target.takeDamages(damages);
        return { damages, heal: 0 };
    }


    getSpriteBackUrl(){
        return this.spriteBackUrl;
    }
    setSpriteBackUrl(){
        return this.spriteBackUrl;
    }
    getSpriteFrontUrl(){
        return this.spriteFrontUrl;
    }
    setSpriteFrontUrl(){
        return this.spriteFrontUrl;
    }

    getSpells(){
        return this.spells;
    }

    setSpells(){
        return this.spells;
    }

    isAlive(){
        return this.getCurentHp() > 0;
    }

    gainXp(opponentPokemon) {
        const xpGains = 10;
        this.curentXp += xpGains;
        return xpGains;
    }
}