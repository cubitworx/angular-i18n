import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

// Local
import { AppComponent } from './app.component';
import { I18nModule } from '../src';

@NgModule({
	bootstrap: [ AppComponent ],
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		I18nModule.forRoot()
	]
})
export class AppModule { }
