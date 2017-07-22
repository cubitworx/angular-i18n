import { Component, OnDestroy, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';

// Local
import { I18nService }  from '../src';

@Component({
	selector: 'app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

	protected _date: Date = new Date();
	protected _locale: string = 'de';
	protected _i18nSubscription: Subscription;
	protected _subscribedLocale: string;

	public constructor(
		protected _i18nService: I18nService
	) {
		this._i18nService.setOptions({ locale: this._locale });
		this._i18nSubscription = this._i18nService.changes.subscribe((changes: SimpleChanges)=>{
			if (changes.locale)
				this._subscribedLocale = changes.locale.currentValue;
		});
	}

	public changeLocale(locale: string): void {
		this._locale = locale;
		this._i18nService.setOptions({ locale: this._locale });
		this._date = new Date();

		this._i18nService.setOptions({ locale: this._locale });
	}

	public ngOnDestroy(): void {
		if (this._i18nSubscription)
			this._i18nSubscription.unsubscribe();
		this._i18nSubscription = null;
	}

}
