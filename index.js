"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var scrollTo_1 = require("./src/scrollTo");
exports.ScrollTo = scrollTo_1.ScrollTo;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
// import { SampleComponent } from './src/sample.component';
// import { SampleDirective } from './src/sample.directive';
// import { SamplePipe } from './src/sample.pipe';
var scrollTo_2 = require("./src/scrollTo");
// export * from './src/sample.component';
// export * from './src/sample.directive';
// export * from './src/sample.pipe';
__export(require("./src/scrollTo"));
var ScrollToModule = (function () {
    function ScrollToModule() {
    }
    ScrollToModule_1 = ScrollToModule;
    ScrollToModule.forRoot = function () {
        return {
            ngModule: ScrollToModule_1
        };
    };
    ScrollToModule = ScrollToModule_1 = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [
                scrollTo_2.ScrollTo,
            ],
            exports: [
                scrollTo_2.ScrollTo,
            ]
        })
    ], ScrollToModule);
    return ScrollToModule;
    var ScrollToModule_1;
}());
exports.ScrollToModule = ScrollToModule;
//# sourceMappingURL=index.js.map