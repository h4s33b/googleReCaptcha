import { GoogleReCaptchaPage } from './app.po';

describe('google-re-captcha App', function() {
  let page: GoogleReCaptchaPage;

  beforeEach(() => {
    page = new GoogleReCaptchaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
