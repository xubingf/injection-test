import { InjectionTestPage } from './app.po';

describe('injection-test App', function() {
  let page: InjectionTestPage;

  beforeEach(() => {
    page = new InjectionTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
