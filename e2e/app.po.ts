export class Test2A2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('test2-a2-app h1')).getText();
  }
}
