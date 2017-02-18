import { AngularExampleYoutubePage } from './app.po';

describe('angular-example-youtube App', function() {
  let page: AngularExampleYoutubePage;

  beforeEach(() => {
    page = new AngularExampleYoutubePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
