import { MemoryPM } from './pageModel'
import { Selector } from 'testcafe'

fixture`Getting Started`.page`http://localhost:8080`

const memoryPM = new MemoryPM();

test('My first test', async t => {
    // Test code
    for (let loop = 0; loop < 15; loop += 1) {
        memoryPM.clickTile(t, loop);
        memoryPM.clickTile(t, loop, false);
    }
    await t.debug();
});