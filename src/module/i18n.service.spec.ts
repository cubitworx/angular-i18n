import * as _ from 'lodash';
import * as moment from 'moment';

// Local
import { I18nService }  from './i18n.service';

describe('I18nService non-locale specific unit tests', () => {

  let service: I18nService;

  beforeEach(() => {
		service = new I18nService();
	});

  it('#format should return moment format', () => {
    expect( service.format('shortDate') ).toBe( 'L' );
    expect( service.format('shortDateTime') ).toBe( 'L LT' );
  });

  it('#format of invalid option should throw exception', () => {
    expect( service.format('invalidFormat') ).toThrow();
  });

});

describe('I18nService default locale unit tests', () => {

  let service: I18nService;

  beforeEach(() => {
		service = new I18nService();
	});

  it('#locale should return default locale', () => {
    expect( service.locale ).toBe( 'en' );
  });

  it('#valueToDate should return date', () => {
		// String
    expect( extractDate( service.valueToDate('01/22/2019 12:34:56', 'shortDate') ) ).toBe({
			year: 2019, month: 0, date: 22, hours: 0, minutes: 0, seconds: 0,
		});
    expect( extractDate( service.valueToDate('01/22/2019 12:34:56', 'shortDateTime') ) ).toBe({
			year: 2019, month: 0, date: 22, hours: 12, minutes: 34, seconds: 56,
		});
		// Moment instance
    expect( extractDate( service.valueToDate( moment( '01/22/2019', service.format('shortDate') ), 'shortDate') ) ).toBe({
			year: 2019, month: 0, date: 22, hours: 0, minutes: 0, seconds: 0,
		});
    expect( extractDate( service.valueToDate( moment( '01/22/2019 12:34', service.format('shortDateTime') ), 'shortDateTime') ) ).toBe({
			year: 2019, month: 0, date: 22, hours: 12, minutes: 34, seconds: 56,
		});
		// Date instance
    expect( extractDate( service.valueToDate( new Date(2019,0,22,12,34,56), 'shortDate') ) ).toBe({
			year: 2019, month: 0, date: 22, hours: 0, minutes: 0, seconds: 0,
		});
    expect( extractDate( service.valueToDate( new Date(2019,0,22,12,34,56), 'shortDateTime') ) ).toBe({
			year: 2019, month: 0, date: 22, hours: 12, minutes: 34, seconds: 56,
		});
  });

  it('#valueToDateString should return date string', () => {
		// String
    expect( service.valueToDateString('01/22/2019 12:34:56', 'shortDate') ).toBe( '01/22/2019' );
    expect( service.valueToDateString('01/22/2019 12:34:56', 'shortDateTime') ).toBe( '01/22/2019 12:34' );
		// Moment instance
    expect( service.valueToDateString( moment( '01/22/2019', service.format('shortDate') ), 'shortDate') ).toBe( '01/22/2019' );
    expect( service.valueToDateString( moment( '01/22/2019 12:34', service.format('shortDateTime') ), 'shortDateTime') ).toBe( '01/22/2019 12:34' );
		// Date instance
    expect( service.valueToDateString( new Date(2019,0,22,12,34,56), 'shortDate') ).toBe( '01/22/2019' );
    expect( service.valueToDateString( new Date(2019,0,22,12,34,56), 'shortDateTime') ).toBe( '01/22/2019 12:34' );
  });

});

describe('I18nService unit tests with `de` locale', () => {

  let service: I18nService;

  beforeEach(() => {
		service = new I18nService();
		service.setOptions({ locale: 'de' });
	});

  it('#locale should return `de` locale', () => {
    expect( service.locale ).toBe( 'de' );
  });

  it('#valueToDate should return date', () => {
		// String
    expect( extractDate( service.valueToDate('22.01.2019 12:34:56', 'shortDate') ) ).toBe({
			year: 2019, month: 0, date: 22, hours: 0, minutes: 0, seconds: 0,
		});
    expect( extractDate( service.valueToDate('22.01.2019 12:34:56', 'shortDateTime') ) ).toBe({
			year: 2019, month: 0, date: 22, hours: 12, minutes: 34, seconds: 56,
		});
		// Moment instance
    expect( extractDate( service.valueToDate( moment( '22.01.2019', service.format('shortDate') ), 'shortDate') ) ).toBe({
			year: 2019, month: 0, date: 22, hours: 0, minutes: 0, seconds: 0,
		});
    expect( extractDate( service.valueToDate( moment( '22.01.2019 12:34', service.format('shortDateTime') ), 'shortDateTime') ) ).toBe({
			year: 2019, month: 0, date: 22, hours: 12, minutes: 34, seconds: 56,
		});
		// Date instance
    expect( extractDate( service.valueToDate( new Date(2019,0,22,12,34,56), 'shortDate') ) ).toBe({
			year: 2019, month: 0, date: 22, hours: 0, minutes: 0, seconds: 0,
		});
    expect( extractDate( service.valueToDate( new Date(2019,0,22,12,34,56), 'shortDateTime') ) ).toBe({
			year: 2019, month: 0, date: 22, hours: 12, minutes: 34, seconds: 56,
		});
  });

  it('#valueToDateString should return date string', () => {
		// String
    expect( service.valueToDateString('22.01.2019 12:34:56', 'shortDate') ).toBe( '22.01.2019' );
    expect( service.valueToDateString('22.01.2019 12:34:56', 'shortDateTime') ).toBe( '22.01.2019 12:34' );
		// Moment instance
    expect( service.valueToDateString( moment( '22.01.2019', service.format('shortDate') ), 'shortDate') ).toBe( '22.01.2019' );
    expect( service.valueToDateString( moment( '22.01.2019 12:34', service.format('shortDateTime') ), 'shortDateTime') ).toBe( '22.01.2019 12:34' );
		// Date instance
    expect( service.valueToDateString( new Date(2019,0,22,12,34,56), 'shortDate') ).toBe( '22.01.2019' );
    expect( service.valueToDateString( new Date(2019,0,22,12,34,56), 'shortDateTime') ).toBe( '22.01.2019 12:34' );
  });

});

function extractDate(date: Date) {
	return {
		year: date.getUTCFullYear(),
		month: date.getUTCMonth(),
		date: date.getUTCDate(),
		hours: date.getUTCHours(),
		minutes: date.getUTCMinutes(),
		seconds: date.getUTCSeconds(),
	};
}
