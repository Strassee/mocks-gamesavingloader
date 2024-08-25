import GameSavingLoader from '../classes/GameSavingLoader';

jest.mock('../classes/reader');

beforeEach(() => {
  jest.resetAllMocks();
});

test('read reject', async () => {
  expect.assertions(1);
  expect(await GameSavingLoader.load().catch()).toEqual(new Error('rejected'));
});
