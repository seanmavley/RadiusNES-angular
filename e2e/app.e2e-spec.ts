import { RadiusNESSPage } from './app.po';

describe('radius-ness App', function() {
  let page: RadiusNESSPage;

  beforeEach(() => {
    page = new RadiusNESSPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
