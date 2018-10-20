import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getMain() {
    return element(by.css('div.main'));
  }

  getRouterContainer() {
    return element(by.css('div.main > div.router-container'));
  }

  getOutlet() {
    return element(by.css('div.main > div.router-container > div.outlet'));
  }
}
