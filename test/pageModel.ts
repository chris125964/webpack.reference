import { Selector } from 'testcafe';

const testId = (id: string) => {
  return `[data-testid="${id}"]`;
};
export class MemoryPM {
  newGameButton: Selector;
  constructor() {
    this.newGameButton = Selector(testId('MemInfo.new-game'));
  }

  async clickTile(t: TestController, index: number, first = true) {
    const sel = Selector(
      `[data-testid="button.${index}.${first ? '1' : '2'}"]`,
    );
    await t.click(sel);
  }

  async clickNewGame(t: TestController) {
    await t.click(this.newGameButton);
  }
}
