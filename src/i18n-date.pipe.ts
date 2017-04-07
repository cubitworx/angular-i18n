import { Pipe, PipeTransform } from '@angular/core';

// Local
import { I18nService }  from './i18n.service';

@Pipe({
	name: 'i18nDate'
})
export class I18nDatePipe implements PipeTransform {

	constructor(
		private _i18nService: I18nService
	) { }

	public transform(value: any, format: string): string {
		return this._i18nService.valueToDateString( value, format );
	}

}
