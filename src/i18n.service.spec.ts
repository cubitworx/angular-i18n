import * as moment from 'moment';

// Local
import { I18nService }  from './i18n.service';

describe('I18nService non-locale specific tests', () => {

	let service: I18nService;

	beforeEach(() => {
		service = new I18nService();
	});

	it('should return moment format', () => {
		expect( service.format('shortDate') )
			.toBe( 'L' );
		expect( service.format('shortDateTime') )
			.toBe( 'L LT' );
	});

	it('should throw exception for invalid format', () => {
		expect( () => service.format('invalidFormat') )
			.toThrow('Invalid format: invalidFormat');
	});

});

describe('I18nService default locale unit tests', () => {

	let
	service: I18nService,
	dateObj: Date,
	dateString: string,
	dateTimeString: string,
	shortDateTest: any,
	shortDateTimeTest: any,
	timestampTest: any;

	beforeEach(() => {
		service = new I18nService();
		dateObj = new Date();

		let momentDate = moment(dateObj).locale('en');
		dateString = momentDate.format('L');
		dateTimeString = momentDate.format('L LT');
		shortDateTest = extractDate(dateObj, {hour: 0, minute: 0, second: 0, millisecond: 0});
		shortDateTimeTest = extractDate(dateObj, {second: 0, millisecond: 0});
		timestampTest = extractDate(dateObj);
	});

	it('should return default locale', () => {
		expect( service.locale ).toBe( 'en' );
	});

	it('should return date', () => {
		// String
		expect( extractDate( service.toDate( dateString, 'shortDate' ) ) )
			.toEqual( shortDateTest );
		expect( extractDate( service.toDate( dateTimeString, 'shortDateTime' ) ) )
			.toEqual( shortDateTimeTest );
		// Moment instance
		expect( extractDate( service.toDate( moment(dateObj), 'shortDate') ) )
			.toEqual( shortDateTest );
		expect( extractDate( service.toDate( moment(dateObj), 'shortDateTime') ) )
			.toEqual( shortDateTimeTest );
		// Date instance
		expect( extractDate( service.toDate( dateObj, 'shortDate') ) )
			.toEqual( shortDateTest );
		expect( extractDate( service.toDate( dateObj, 'shortDateTime') ) )
			.toEqual( shortDateTimeTest );
	});

	it('should return date string', () => {
		// String
		expect( service.toDateString( dateString, 'shortDate' ) )
			.toBe( dateString );
		expect( service.toDateString( dateTimeString, 'shortDateTime' ) )
			.toBe( dateTimeString );
		// Moment instance
		expect( service.toDateString( moment(dateObj), 'shortDate') )
			.toBe( dateString );
		expect( service.toDateString( moment(dateObj), 'shortDateTime') )
			.toBe( dateTimeString );
		// Date instance
		expect( service.toDateString( dateObj, 'shortDate') )
			.toBe( dateString );
		expect( service.toDateString( dateObj, 'shortDateTime') )
			.toBe( dateTimeString );
	});

});

describe('I18nService unit tests with `de` locale', () => {

	let
	service: I18nService,
	dateObj: Date,
	dateString: string,
	dateTimeString: string,
	shortDateTest: any,
	shortDateTimeTest: any,
	timestampTest: any;

	beforeEach(() => {
		service = new I18nService();
		dateObj = new Date();

		service.setOptions({ locale: 'de' });

		let momentDate = moment(dateObj).locale('de');
		dateString = momentDate.format('L');
		dateTimeString = momentDate.format('L LT');
		shortDateTest = extractDate(dateObj, {hour: 0, minute: 0, second: 0, millisecond: 0});
		shortDateTimeTest = extractDate(dateObj, {second: 0, millisecond: 0});
		timestampTest = extractDate(dateObj);
	});

	it('should return `de` locale', () => {
		expect( service.locale ).toBe( 'de' );
	});

	it('should return date', () => {
		// String
		expect( extractDate( service.toDate( dateString, 'shortDate' ) ) )
			.toEqual( shortDateTest );
		expect( extractDate( service.toDate( dateTimeString, 'shortDateTime' ) ) )
			.toEqual( shortDateTimeTest );
		// Moment instance
		expect( extractDate( service.toDate( moment(dateObj), 'shortDate') ) )
			.toEqual( shortDateTest );
		expect( extractDate( service.toDate( moment(dateObj), 'shortDateTime') ) )
			.toEqual( shortDateTimeTest );
		// Date instance
		expect( extractDate( service.toDate( dateObj, 'shortDate') ) )
			.toEqual( shortDateTest );
		expect( extractDate( service.toDate( dateObj, 'shortDateTime') ) )
			.toEqual( shortDateTimeTest );
	});

	it('should return date string', () => {
		// String
		expect( service.toDateString( dateString, 'shortDate' ) )
			.toBe( dateString );
		expect( service.toDateString( dateTimeString, 'shortDateTime' ) )
			.toBe( dateTimeString );
		// Moment instance
		expect( service.toDateString( moment(dateObj), 'shortDate') )
			.toBe( dateString );
		expect( service.toDateString( moment(dateObj), 'shortDateTime') )
			.toBe( dateTimeString );
		// Date instance
		expect( service.toDateString( dateObj, 'shortDate') )
			.toBe( dateString );
		expect( service.toDateString( dateObj, 'shortDateTime') )
			.toBe( dateTimeString );
	});

});

function extractDate(date: Date, override: moment.MomentSetObject = {}) {
	return {
		year: ( override.year !== undefined ) ? override.year : date.getFullYear(),
		month: ( override.month !== undefined ) ? override.month : date.getMonth(),
		date: ( override.date !== undefined ) ? override.date : date.getDate(),
		hour: ( override.hour !== undefined ) ? override.hour : date.getHours(),
		minute: ( override.minute !== undefined ) ? override.minute : date.getMinutes(),
		second: ( override.second !== undefined ) ? override.second : date.getSeconds(),
		millisecond: ( override.millisecond !== undefined ) ? override.millisecond : date.getMilliseconds(),
	};
}
