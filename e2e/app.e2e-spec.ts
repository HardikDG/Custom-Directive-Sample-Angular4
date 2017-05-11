import { CustomDirectivePage } from './app.po';

describe('custom-directive App', () => {
  let page: CustomDirectivePage;

  beforeEach(() => {
    page = new CustomDirectivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
