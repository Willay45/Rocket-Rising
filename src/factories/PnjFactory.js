import PnjFactoryData from "./PnjFactoryData";
const dataPromise = PnjFactoryData();

class PnjFactory {
  constructor() {
  }

  async get(id){
    const data = await dataPromise;
    return data[id];
  };
}

export default new PnjFactory();