import Api from "../api/Api";
import Attack from "../models/Attack";
import config from "../config";

class AttackFactory {
  async get(name){
      const spell = await Api.getSpell(name);
      return new Attack(
          spell.id,
          spell.name,
          spell.power,
          spell.pp,
          spell.type.name,
          spell.flavor_text_entries.find(element => element.language.name === "en" && element.version_group.name === config.version).flavor_text,
      );
  };
}










export default new AttackFactory();