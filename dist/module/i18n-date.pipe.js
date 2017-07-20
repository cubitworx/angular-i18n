"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// Local
var i18n_service_1 = require("./i18n.service");
var I18nDatePipe = (function () {
    function I18nDatePipe(_i18nService) {
        this._i18nService = _i18nService;
    }
    I18nDatePipe.prototype.transform = function (value, format) {
        return this._i18nService.valueToDateString(value, format);
    };
    I18nDatePipe = __decorate([
        core_1.Pipe({
            name: 'i18nDate'
        }),
        __metadata("design:paramtypes", [i18n_service_1.I18nService])
    ], I18nDatePipe);
    return I18nDatePipe;
}());
exports.I18nDatePipe = I18nDatePipe;
//# sourceMappingURL=i18n-date.pipe.js.map