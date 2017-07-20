import { Component } from '@angular/core';

// Local
import { I18nService }  from '../../module/i18n.service';

@Component({
	selector: 'app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	protected _date: Date = new Date();
	protected _locale: string = 'de';

	public constructor(
		protected _i18nService: I18nService
	) {
		this._i18nService.setOptions({ locale: this._locale });
	}

	public changeLocale(locale: string) {
		this._locale = locale;
		this._i18nService.setOptions({ locale: this._locale });
		this._date = new Date();
	}

}
