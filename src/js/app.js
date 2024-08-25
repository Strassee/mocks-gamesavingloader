import GameSavingLoader from './classes/GameSavingLoader';

(async () => {
  try {
    console.log(await GameSavingLoader.load());
  } catch (error) {
    console.log(error);
  }
})();
