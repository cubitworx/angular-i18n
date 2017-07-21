import { ModuleWithProviders, NgModule } from '@angular/core';

// Local
import { I18nDatePipe } from './i18n-date.pipe';
import { I18nService } from './i18n.service';

@NgModule({
	declarations: [
		I18nDatePipe
	],
	exports: [
		I18nDatePipe
	]
})
export class I18nModule {

	public static forRoot(): ModuleWithProviders {
		return {
			ngModule: I18nModule,
			providers: [
				I18nService
			]
		};
	}

}
