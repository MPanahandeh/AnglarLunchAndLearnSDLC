import { NgSDLCPage } from './app.po';

describe('ng-sdlc App', function() {
  let page: NgSDLCPage;

  beforeEach(() => {
    page = new NgSDLCPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
