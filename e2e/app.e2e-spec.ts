import { TelkkarissaPage } from './app.po';

describe('telkkarissa App', () => {
  let page: TelkkarissaPage;

  beforeEach(() => {
    page = new TelkkarissaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
