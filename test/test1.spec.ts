import {Selector} from 'testcafe'

fixture `Getting Started`.page `http://localhost:8080`

test('My first test', async t => {
    // Test code
    await t.wait(5000)
});