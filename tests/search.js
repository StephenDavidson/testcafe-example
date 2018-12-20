import { Selector, ClientFunction } from 'testcafe';

fixture `Search`
  .page `https://duckduckgo.com`;

test('should return "Apple"', async t => {
  await t
    .typeText('#search_form_input_homepage', 'Apple Wiki')
    .click('#search_button_homepage')
    .expect(Selector('.result__a').innerText).contains('Apple')
});

test('page title should contain "DuckDuckGo"', async t => {
  await t.expect(ClientFunction(()=> document.title)()).contains('DuckDuckGo');
});
