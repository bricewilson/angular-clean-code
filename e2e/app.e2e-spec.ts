import { BooktrackerPage } from './app.po';

describe('booktracker App', () => {
  let page: BooktrackerPage;

  beforeEach(() => {
    page = new BooktrackerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
