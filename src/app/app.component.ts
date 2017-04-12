import { Component } from '@angular/core';

// Local
import { I18nService }  from '../module/i18n.service';

@Component({
	selector: 'app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	private _date: Date = new Date();

	public constructor(
		i18nService: I18nService
	) {
		i18nService.setOptions({ locale: 'de' });
	}

}
