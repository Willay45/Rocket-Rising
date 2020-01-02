import PokemonLvlsTable from "./PokemonLvlsTable";


export default class Pokemon {



    constructor(id, name, baseXp, types, baseStats, spells, description, isCaptured) {
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
        this.isCaptured = false;
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

    setBaseStats(newStats) {
        return this.baseStats + newStats;
    }

    getCurentXp() {
        return this.curentXp;
    }

    getCurentHp() {
        return this.curentHp;
    }

    setIsCaptured(captured){
        this.isCaptured = captured;
    }

    setCurentHp(hp) {
        this.curentHp = hp;
    }

    setLevel(lvl) {
        this.curentXp = PokemonLvlsTable[lvl]; //faire récompense de level up


    }

    setStats(){
        for (let i = 4; i < this.getLevel(); i++){
            this.baseStats.attack.base = this.baseStats.attack.base +5;
            this.baseStats.attack.current = this.baseStats.attack.base;
            this.baseStats.defense.base = this.baseStats.defense.base +5;
            this.baseStats.defense.current = this.baseStats.defense.base;
            this.baseStats.speed.base = this.baseStats.speed.base +5;
            this.baseStats.speed.current = this.baseStats.speed.base;
            this.baseStats.specialAttack.base = this.baseStats.specialAttack.base +5;
            this.baseStats.specialAttack.current = this.baseStats.specialAttack.base;
            this.baseStats.specialDefense.base = this.baseStats.specialDefense.base +5;
            this.baseStats.specialDefense.current = this.baseStats.specialDefense.base;
            this.baseStats.hp.base = this.baseStats.hp.base +5;
            this.baseStats.hp.current = this.baseStats.hp.base;
            this.setCurentHp(this.baseStats.hp.base);
        }
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
            this.statut = "KO";
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