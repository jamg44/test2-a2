import { Test2A2Page } from './app.po';

describe('test2-a2 App', function() {
  let page: Test2A2Page;

  beforeEach(() => {
    page = new Test2A2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('test2-a2 works!');
  });
});
