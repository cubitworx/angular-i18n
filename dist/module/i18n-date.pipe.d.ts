import { PipeTransform } from '@angular/core';
import { I18nService } from './i18n.service';
export declare class I18nDatePipe implements PipeTransform {
    private _i18nService;
    constructor(_i18nService: I18nService);
    transform(value: any, format: string): string;
}
