import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import * as moment from 'moment';

// Local
import { I18nFormats } from './common';

interface I18nServiceOptions {
	formats: I18nFormats;
	locale: string;
}

// TODO Must make this reactive like user.service

@Injectable()
export class I18nService {

	private _options: I18nServiceOptions = {
		formats: {
			shortDate: 'L',
			shortDateTime: 'L LT'
		},
		locale: 'en'
	};

	public get locale(): string {
		return this._options.locale;
	}

	public format(name: string): string {
		if( !this._options.formats[name] )
			throw 'Invalid format: ' + name;

		return this._options.formats[name];
	}

	public setOptions(options: I18nServiceOptions) {
		this._options = options;
	}

	public valueToDate(value: any, format: string = 'shortDate'): Date {
		// No value
		if( !value )
			return new Date();

		return this.valueToMoment( value, format ).toDate();
	}

	public valueToDateString(value: any, format: string = 'shortDate'): string {
		// No value
		if( !value )
			return '';

		return this.valueToMoment( value, format ).locale( this._options.locale ).format( this.format(format) );
	}

	public valueToMoment(value: any, format: string = 'shortDate'): moment.Moment {

		// No value
		if( !value )
			return moment();

		format = this.format(format);

		// String
		if( _.isString( value ) ) {

			try {
				return moment( value, format );
			} catch(exception) {
				console.error('Invalid date string format for', {value, exception});
				return moment();
			}

		// Instance of moment
		} else if( value instanceof moment ) {
			return value;
		}

		// Instance of Date
		if( value instanceof Date )
			return moment( value );

		// Date object
		else if( value === Date )
			return moment();

		console.error('Unrecognised date value', value);

		return moment();
	}

}
