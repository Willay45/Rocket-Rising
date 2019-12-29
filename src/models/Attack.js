

export default class Attack {
    constructor(id, name, power, pp, type, description) {
        this.id = id;
        this.name = name;
        this.power = power;
        this.pp = pp;
        this.type = type;
        this.description = description;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getPower() {
        return this.power;
    }

    getPp() {
        return this.pp;
    }

    getType() {
        return this.type;
    }

    getDescription() {
        return this.description;
    }
}