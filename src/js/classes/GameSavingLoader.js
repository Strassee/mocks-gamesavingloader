import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read(); // возвращается Promise!
      const value = await json(data); // возвращается Promise!
      return new GameSaving(value.id, value.created, value.userInfo.id, value.userInfo.name, value.userInfo.level, value.userInfo.points);
    } catch (error) {
      return error;
    }
  }
}
