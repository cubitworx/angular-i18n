import { NgModule } from '@angular/core';

// Local
import { I18nDatePipe } from './module/i18n-date.pipe';
import { I18nService } from './module/i18n.service';

@NgModule({
	declarations: [
		I18nDatePipe
	],
	exports: [
		I18nDatePipe
	],
	providers: [
		I18nService
	]
})
export class I18nModule {

	public static forRoot(): I18nModule {
		return {
			ngModule: I18nModule,
			providers: [
				I18nService
			]
		};
	}

}
