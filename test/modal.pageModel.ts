import { Selector } from 'testcafe';

const testId = (id: string) => {
  return `[data-testid="${id}"]`;
};

export class ModalPM {
  close: Selector;

  constructor() {
    this.close = Selector(testId('modal.close-button'));
  }

  async closeModal(t: TestController) {
    await t.click(this.close);
  }
}
