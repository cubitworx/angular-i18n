import * as moment from 'moment';
import { I18nFormats } from './common';
export interface I18nServiceOptions {
    formats?: I18nFormats;
    locale?: string;
}
export declare class I18nService {
    private _options;
    readonly locale: string;
    format(name: string): string;
    setOptions(options: I18nServiceOptions): void;
    valueToDate(value: any, format?: string): Date;
    valueToDateString(value: any, format?: string): string;
    valueToMoment(value: any, format?: string): moment.Moment;
}
