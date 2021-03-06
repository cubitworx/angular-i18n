import { Injectable, SimpleChange, SimpleChanges } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import * as _ from 'lodash';
import * as moment from 'moment';

// Local
import { I18nFormats } from './common';

export interface I18nServiceOptions {
	formats?: I18nFormats;
	locale?: string;
}

// TODO Must make this reactive like user.service

@Injectable()
export class I18nService {

	protected _changesSubject: Subject<SimpleChanges> = new Subject();
	protected _firstChanges: {
		locale: boolean
	} = {
		locale: true
	};
	protected _options: I18nServiceOptions = {
		formats: {
			shortDate: 'L',
			shortDateTime: 'L LT'
		},
		locale: 'en'
	};

	public get changes(): Observable<SimpleChanges> {
		return this._changesSubject.asObservable();
	}

	public get locale(): string {
		return this._options.locale;
	}

	public format(name: string): string {
		if (!this._options.formats[name])
			throw 'Invalid format: ' + name;

		return this._options.formats[name];
	}

	public setOptions(options: I18nServiceOptions): void {
		let changes: SimpleChanges = {};
		if (options.locale) {
			changes.locale = new SimpleChange(this._options.locale, options.locale, this._firstChanges.locale);
			this._firstChanges.locale = false;
		}

		_.merge(this._options, options);

		this._changesSubject.next(changes);
	}

	public toDate(value: any, format: string = 'shortDate'): Date {
		// No value
		if (!value)
			return new Date();

		let result = this.toMoment(value, format);

		if (['shortDate'].indexOf(format) !== -1)
			result.set({hour: 0, minute: 0, second: 0, millisecond: 0});
		else if (['shortDateTime'].indexOf(format) !== -1)
			result.set({second: 0, millisecond: 0});

		return result.toDate();
	}

	public toDateString(value: any, format: string = 'shortDate'): string {
		// No value
		if (!value)
			return '';

		return this.toMoment(value, format).locale(this._options.locale).format( this.format(format) );
	}

	public toMoment(value: any, format: string = 'shortDate'): moment.Moment {

		// No value
		if (!value)
			return moment();

		format = this.format(format);

		// String
		if (_.isString( value )) {

			try {
				let valueMoment = moment(value, format, this._options.locale, true);
				if (valueMoment.isValid())
					return valueMoment;

				valueMoment = moment(value, this._options.locale, true);
				if (valueMoment.isValid())
					return valueMoment;

				console.error('Invalid date string format for', {value, format});
			} catch (exception) {
				console.error('Invalid date string format for', {value, format, exception});
			}

			return moment();
		}

		// Instance of moment
		if (value instanceof moment)
			return value;

		// Instance of Date
		if (value instanceof Date)
			return moment(value);

		// Date object
		if (value === Date)
			return moment();

		console.error('Unrecognised date value', value);
		return moment();
	}

}
