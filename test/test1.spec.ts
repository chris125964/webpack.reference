import { MemoryPM } from './pageModel';
import { ModalPM } from './modal.pageModel';
import { Selector } from 'testcafe';

fixture`Getting Started`.page`http://localhost:8080`;

const memoryPM = new MemoryPM();
const modalPM = new ModalPM();

test('My first test', async (t) => {
  // Test code
  for (let loop = 1; loop <= 15; loop += 1) {
    memoryPM.clickTile(t, loop);
    memoryPM.clickTile(t, loop, false);
  }
  await t.debug();
  modalPM.closeModal(t);
  memoryPM.clickNewGame(t);
  await t.debug();
});
