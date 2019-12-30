import BattleGameScene from "../models/BattleGameScene";
import PnjFactory from "./PnjFactory";
import SceneFactory from "./SceneFactory";
import WorldMapGameScene from "../models/WorldMapGameScene";

export default (factory) => ({
  'ondine_battle': async () => {
    const pnj = await PnjFactory.get("ondine");
    return new BattleGameScene(
        pnj,
        "https://image.noelshack.com/fichiers/2019/52/6/1577527240-plage.png",
        function (game) {
          game.setCurrentScene(SceneFactory.get('worldmap'));
        });
  },
  'worldmap': () => new WorldMapGameScene()
});