"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// Local
var i18n_date_pipe_1 = require("./module/i18n-date.pipe");
var i18n_service_1 = require("./module/i18n.service");
var I18nModule = I18nModule_1 = (function () {
    function I18nModule() {
    }
    I18nModule.forRoot = function () {
        return {
            ngModule: I18nModule_1,
            providers: [
                i18n_service_1.I18nService
            ]
        };
    };
    return I18nModule;
}());
I18nModule = I18nModule_1 = __decorate([
    core_1.NgModule({
        declarations: [
            i18n_date_pipe_1.I18nDatePipe
        ],
        exports: [
            i18n_date_pipe_1.I18nDatePipe
        ],
        providers: [
            i18n_service_1.I18nService
        ]
    })
], I18nModule);
exports.I18nModule = I18nModule;
var I18nModule_1;
//# sourceMappingURL=module.js.map