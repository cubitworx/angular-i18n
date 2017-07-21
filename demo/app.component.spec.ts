import { TestBed } from '@angular/core/testing';

// Local
import { AppComponent } from './app.component';
import { I18nDatePipe, I18nService } from '../src';

describe('App', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				AppComponent,
				I18nDatePipe
			],
			providers: [
				I18nService
			]
		});
	});

	it ('should work', () => {
		let fixture = TestBed.createComponent(AppComponent);
		expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
	});
});
