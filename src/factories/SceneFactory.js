import SceneFactoryData from "./SceneFactoryData";

class SceneFactory{
    constructor() {
        this.factoryData = SceneFactoryData(this);
    }
    get(id) {
        return this.factoryData[id]();
    };
}

export default new SceneFactory();