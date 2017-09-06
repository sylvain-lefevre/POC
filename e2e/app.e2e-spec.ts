import { FraisIhmPage } from './app.po';

describe('frais-ihm App', function() {
  let page: FraisIhmPage;

  beforeEach(() => {
    page = new FraisIhmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
