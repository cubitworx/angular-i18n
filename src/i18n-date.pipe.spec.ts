// Local
import { I18nDatePipe }  from './i18n-date.pipe';
import { I18nService }  from './i18n.service';

describe('I18nDatePipe with default locale', () => {

	let
	pipe: I18nDatePipe,
	dateObj = new Date(2019, 0, 22, 12, 34, 56),
	dateString = '01/22/2019',
	dateTimeString = '01/22/2019 12:34 PM';

	beforeEach(() => {
		pipe = new I18nDatePipe( new I18nService() );
	});

	it('transforms date to date string', () => {
		expect( pipe.transform( dateObj, 'shortDate' ) ).toBe( dateString );
		expect( pipe.transform( dateObj, 'shortDateTime' ) ).toBe( dateTimeString );
	});

});

describe('I18nDatePipe with `de` locale', () => {

	let
	pipe: I18nDatePipe,
	dateObj = new Date(2019, 0, 22, 12, 34, 56),
	dateString = '22.01.2019',
	dateTimeString = '22.01.2019 12:34';

	beforeEach(() => {
		let service = new I18nService();
		service.setOptions({ locale: 'de' });
		pipe = new I18nDatePipe( service );
	});

	it('transforms date to date string', () => {
		expect( pipe.transform( dateObj, 'shortDate' ) ).toBe( dateString );
		expect( pipe.transform( dateObj, 'shortDateTime' ) ).toBe( dateTimeString );
	});

});
