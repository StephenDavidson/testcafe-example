import { Selector } from 'testcafe';

fixture `Search`
  .page `https://duckduckgo.com`;


test('should display when clicking hamburger icon', async t => {
  await t
    .click('.badge-link__close')
    .click('.header__button--menu')
    .expect(Selector('.nav-menu__heading span').innerText).eql('SETTINGS')
});