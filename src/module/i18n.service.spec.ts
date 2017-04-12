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

  let
	service: I18nService,
	dateObj = new Date(2019,0,22,12,34,56),
	timestampString = '01/22/2019 12:34:56',
	dateString = '01/22/2019',
	dateTimeString = '01/22/2019 12:34 PM',
	dateTimeObj = { year: 2019, month: 0, date: 22, hours: 12, minutes: 34, seconds: 56 };

  beforeEach(() => {
		service = new I18nService();
	});

  it('#locale should return default locale', () => {
    expect( service.locale ).toBe( 'en' );
  });

  it('#valueToDate should return date', () => {
		// String
    expect( extractDate( service.valueToDate( dateString, 'shortDate' ) ) ).toEqual( dateTimeObj );
    expect( extractDate( service.valueToDate( timestampString, 'shortDateTime' ) ) ).toEqual( dateTimeObj );
		// Moment instance
    expect( extractDate( service.valueToDate( moment( dateString, service.format('shortDate') ), 'shortDate') ) ).toEqual( dateTimeObj );
    expect( extractDate( service.valueToDate( moment( dateTimeString, service.format('shortDateTime') ), 'shortDateTime') ) ).toEqual( dateTimeObj );
		// Date instance
    expect( extractDate( service.valueToDate( dateObj, 'shortDate') ) ).toEqual( dateTimeObj );
    expect( extractDate( service.valueToDate( dateObj, 'shortDateTime') ) ).toEqual( dateTimeObj );
  });

  it('#valueToDateString should return date string', () => {
		// String
    expect( service.valueToDateString( dateString, 'shortDate' ) ).toBe( dateString );
    expect( service.valueToDateString( timestampString, 'shortDateTime' ) ).toBe( dateTimeString );
		// Moment instance
    expect( service.valueToDateString( moment( dateString, service.format('shortDate') ), 'shortDate') ).toBe( dateString );
    expect( service.valueToDateString( moment( dateTimeString, service.format('shortDateTime') ), 'shortDateTime') ).toBe( dateTimeString );
		// Date instance
    expect( service.valueToDateString( dateObj, 'shortDate') ).toBe( dateString );
    expect( service.valueToDateString( dateObj, 'shortDateTime') ).toBe( dateTimeString );
  });

});

describe('I18nService unit tests with `de` locale', () => {

  let
	service: I18nService,
	dateObj = new Date(2019,0,22,12,34,56),
	timestampString = '22.01.2019 12:34:56',
	dateString = '22.01.2019',
	dateTimeString = '22.01.2019 12:34',
	dateTimeObj = { year: 2019, month: 0, date: 22, hours: 12, minutes: 34, seconds: 56 };

  beforeEach(() => {
		service = new I18nService();
		service.setOptions({ locale: 'de' });
	});

  it('#locale should return `de` locale', () => {
    expect( service.locale ).toBe( 'de' );
  });

  it('#valueToDate should return date', () => {
		// String
    expect( extractDate( service.valueToDate( dateString, 'shortDate' ) ) ).toEqual( dateTimeObj );
    expect( extractDate( service.valueToDate( timestampString, 'shortDateTime' ) ) ).toEqual( dateTimeObj );
		// Moment instance
    expect( extractDate( service.valueToDate( moment( dateString, service.format('shortDate') ), 'shortDate') ) ).toEqual( dateTimeObj );
    expect( extractDate( service.valueToDate( moment( dateTimeString, service.format('shortDateTime') ), 'shortDateTime') ) ).toEqual( dateTimeObj );
		// Date instance
    expect( extractDate( service.valueToDate( dateObj, 'shortDate') ) ).toEqual( dateTimeObj );
    expect( extractDate( service.valueToDate( dateObj, 'shortDateTime') ) ).toEqual( dateTimeObj );
  });

  it('#valueToDateString should return date string', () => {
		// String
    expect( service.valueToDateString( dateString, 'shortDate' ) ).toBe( dateString );
    expect( service.valueToDateString( timestampString, 'shortDateTime' ) ).toBe( dateTimeString );
		// Moment instance
    expect( service.valueToDateString( moment( dateString, service.format('shortDate') ), 'shortDate') ).toBe( dateString );
    expect( service.valueToDateString( moment( dateTimeString, service.format('shortDateTime') ), 'shortDateTime') ).toBe( dateTimeString );
		// Date instance
    expect( service.valueToDateString( dateObj, 'shortDate') ).toBe( dateString );
    expect( service.valueToDateString( dateObj, 'shortDateTime') ).toBe( dateTimeString );
  });

});

function extractDate(date: Date) {
	return {
		year: date.getFullYear(),
		month: date.getMonth(),
		date: date.getDate(),
		hours: date.getHours(),
		minutes: date.getMinutes(),
		seconds: date.getSeconds(),
	};
}
