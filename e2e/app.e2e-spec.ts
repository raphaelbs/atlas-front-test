import { AppPage } from './app.po';

describe('atlas-front-test App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should find .main', () => {
    page.navigateTo();
    expect(page.getMain()).not.toBeNull();
  });

  it('should find .router-container', () => {
    page.navigateTo();
    expect(page.getRouterContainer()).not.toBeNull();
  });

  it('should find .outlet', () => {
    page.navigateTo();
    expect(page.getOutlet()).not.toBeNull();
  });
});
