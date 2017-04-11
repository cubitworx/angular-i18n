// Local
import { I18nDatePipe }  from './i18n-date.pipe';
import { I18nService }  from './i18n.service';

describe('I18nDatePipe with default locale', () => {

  let pipe: I18nDatePipe;

  beforeEach(() => {
		pipe = new I18nDatePipe( new I18nService() );
	});

  it('transforms date to date string', () => {
    expect( pipe.transform( new Date(2019,0,22,12,34,56), 'shortDate' ) ).toBe( '01/22/2019' );
    expect( pipe.transform( new Date(2019,0,22,12,34,56), 'shortDateTime' ) ).toBe( '01/22/2019 12:34:56' );
  });

});

describe('I18nDatePipe with `fr` locale', () => {

  let pipe: I18nDatePipe;

  beforeEach(() => {
		let service = new I18nService();
		service.setOptions({ locale: 'fr' });
		pipe = new I18nDatePipe( service );
	});

  it('transforms date to date string', () => {
    expect( pipe.transform( new Date(2019,0,22,12,34,56), 'shortDate' ) ).toBe( '22.01.2019' );
    expect( pipe.transform( new Date(2019,0,22,12,34,56), 'shortDateTime' ) ).toBe( '22.01.2019 12:34:56' );
  });

});
