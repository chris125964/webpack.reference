import { Selector } from 'testcafe';

export class MemoryPM {
  constructor() {}

  async clickTile(t: TestController, index: number, first = true) {
    const sel = Selector(
      `[data-testid="button.${index}.${first ? '1' : '2'}"]`,
    );
    await t.click(sel);
  }
}
