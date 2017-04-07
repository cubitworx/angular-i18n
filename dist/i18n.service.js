"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var _ = require("lodash");
var moment = require("moment");
// TODO Must make this reactive like user.service
var I18nService = (function () {
    function I18nService() {
        this._options = {
            formats: {
                shortDate: 'L',
                shortDateTime: 'L LT'
            },
            locale: 'en'
        };
    }
    Object.defineProperty(I18nService.prototype, "locale", {
        get: function () {
            return this._options.locale;
        },
        enumerable: true,
        configurable: true
    });
    I18nService.prototype.format = function (name) {
        if (!this._options.formats[name])
            throw 'Invalid format: ' + name;
        return this._options.formats[name];
    };
    I18nService.prototype.setOptions = function (options) {
        this._options = options;
    };
    I18nService.prototype.valueToDate = function (value, format) {
        if (format === void 0) { format = 'shortDate'; }
        // No value
        if (!value)
            return new Date();
        return this.valueToMoment(value, format).toDate();
    };
    I18nService.prototype.valueToDateString = function (value, format) {
        if (format === void 0) { format = 'shortDate'; }
        // No value
        if (!value)
            return '';
        return this.valueToMoment(value, format).locale(this._options.locale).format(this.format(format));
    };
    I18nService.prototype.valueToMoment = function (value, format) {
        if (format === void 0) { format = 'shortDate'; }
        // No value
        if (!value)
            return moment();
        format = this.format(format);
        // String
        if (_.isString(value)) {
            try {
                return moment(value, format);
            }
            catch (exception) {
                console.error('Invalid date string format for', { value: value, exception: exception });
                return moment();
            }
            // Instance of moment
        }
        else if (value instanceof moment) {
            return value;
        }
        // Instance of Date
        if (value instanceof Date)
            return moment(value);
        else if (value === Date)
            return moment();
        console.error('Unrecognised date value', value);
        return moment();
    };
    return I18nService;
}());
I18nService = __decorate([
    core_1.Injectable()
], I18nService);
exports.I18nService = I18nService;
//# sourceMappingURL=i18n.service.js.map