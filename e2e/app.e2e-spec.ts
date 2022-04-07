import { TrainingRegistrationTemplatePage } from './app.po';

describe('TrainingRegistration App', function() {
  let page: TrainingRegistrationTemplatePage;

  beforeEach(() => {
    page = new TrainingRegistrationTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
