import PnjFactoryData from "./PnjFactoryData";
const dataPromise = PnjFactoryData();

class PnjFactory {
  async get(id){
    const data = await dataPromise;
    return data[id];
  };
}

export default new PnjFactory();