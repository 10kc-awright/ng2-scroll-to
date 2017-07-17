"use strict";
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var import0 = require("@angular/core/src/linker/ng_module_factory");
var import1 = require("../index");
var import2 = require("@angular/common/src/common_module");
var import3 = require("@angular/common/src/localization");
var import5 = require("@angular/core/src/i18n/tokens");
var ScrollToModuleInjector = (function (_super) {
    __extends(ScrollToModuleInjector, _super);
    function ScrollToModuleInjector(parent) {
        return _super.call(this, parent, [], []) || this;
    }
    Object.defineProperty(ScrollToModuleInjector.prototype, "_NgLocalization_2", {
        get: function () {
            if ((this.__NgLocalization_2 == null)) {
                (this.__NgLocalization_2 = new import3.NgLocaleLocalization(this.parent.get(import5.LOCALE_ID)));
            }
            return this.__NgLocalization_2;
        },
        enumerable: true,
        configurable: true
    });
    ScrollToModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._ScrollToModule_1 = new import1.ScrollToModule();
        return this._ScrollToModule_1;
    };
    ScrollToModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import1.ScrollToModule)) {
            return this._ScrollToModule_1;
        }
        if ((token === import3.NgLocalization)) {
            return this._NgLocalization_2;
        }
        return notFoundResult;
    };
    ScrollToModuleInjector.prototype.destroyInternal = function () {
    };
    return ScrollToModuleInjector;
}(import0.NgModuleInjector));
exports.ScrollToModuleNgFactory = new import0.NgModuleFactory(ScrollToModuleInjector, import1.ScrollToModule);
//# sourceMappingURL=index.ngfactory.js.map