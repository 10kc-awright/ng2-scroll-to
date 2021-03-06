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
var MouseEvent = global.MouseEvent;
var ScrollTo = (function () {
    function ScrollTo(el) {
        this.el = el;
    }
    ScrollTo.prototype.onClick = function (event) {
        event.preventDefault();
        var scrollEnd;
        if (this.scrollYTarget) {
            if (isNaN(Number(this.scrollYTarget))) {
                throw 'scrollYTarget must have numerical values';
            }
            scrollEnd = this.scrollYTarget;
        }
        var target;
        if (scrollEnd == null) {
            target = this.getTarget();
            if (!target) {
                console.warn('target element do not exist');
                return;
            }
            scrollEnd = target.offsetTop;
        }
        var scrollingElement = this.getScrollableElement(target);
        try {
            if (scrollingElement === document.body) {
                this.smoothScroll(document.documentElement, scrollEnd);
            }
        }
        catch (e) {
            console.warn(e);
        }
        this.smoothScroll(scrollingElement, scrollEnd);
    };
    ScrollTo.prototype.getScrollableElement = function (target) {
        var scrollableElement;
        if (this.scrollableElementSelector) {
            scrollableElement = document.querySelector(this.scrollableElementSelector);
        }
        else if (target != null) {
            scrollableElement = this.findScrollableParent(target);
        }
        else {
            scrollableElement = this.findMainScrollableElement();
        }
        return scrollableElement;
    };
    ScrollTo.prototype.getTarget = function () {
        var target;
        if (this.scrollTargetSelector) {
            target = document.querySelector(this.scrollTargetSelector);
        }
        else if (this.el.nativeElement.href) {
            var href = '#' + this.el.nativeElement.href.split('#')[1];
            target = document.querySelector(href);
        }
        return target;
    };
    ScrollTo.prototype.smoothScroll = function (element, end) {
        var _this = this;
        var duration = 500;
        var clock = Date.now();
        var requestAnimationFrame = window.requestAnimationFrame || function (fn) {
            window.setTimeout(fn, 15);
        };
        var offset = 0;
        if (this.scrollOffSet) {
            if (isNaN(Number(this.scrollOffSet))) {
                throw 'scrollOffSet must have numerical values';
            }
            end -= this.scrollOffSet;
        }
        var start = element.scrollTop;
        var step = function () {
            var elapsed = Date.now() - clock;
            var position = _this.position(start, end, elapsed, duration);
            element.scrollTop = position;
            if (elapsed > duration) {
            }
            else {
                requestAnimationFrame(step);
            }
        };
        step();
    };
    // ease in out function thanks to:
    // http://blog.greweb.fr/2012/02/bezier-curve-based-easing-functions-from-concept-to-implementation/
    ScrollTo.prototype.easeInOutCubic = function (t) {
        return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    };
    /**
      * calculate the scroll position we should be in
      * given the start and end point of the scroll
      * the time elapsed from the beginning of the scroll
      * and the total duration of the scroll (default 500ms)
      */
    ScrollTo.prototype.position = function (start, end, elapsed, duration) {
        if (elapsed > duration) {
            return end;
        }
        ;
        return start + (end - start) * this.easeInOutCubic(elapsed / duration); // <-- you can change the easing funtion there
        // return start + (end - start) * (elapsed / duration); // <-- this would give a linear scroll
    };
    /**
      * finds scrollable parent of an element
      * @method findScrollableParent
      * @param {HTMLElement} element
      * @returns {HTMLElement} element
      */
    ScrollTo.prototype.findScrollableParent = function (element) {
        var isBody, hasScrollableSpace, hasVisibleOverflow;
        do {
            element = element.parentElement;
            // set condition variables
            isBody = element === document.body;
            hasScrollableSpace = element.clientHeight < element.scrollHeight;
            hasVisibleOverflow = getComputedStyle(element, null).overflow === 'visible';
        } while (!isBody && !(hasScrollableSpace && !hasVisibleOverflow));
        return element;
    };
    /**
      * finds scrollable parent of an element
      * @method findMainScrollableElement
      * @returns {HTMLElement} element
      */
    ScrollTo.prototype.findMainScrollableElement = function () {
        var element = this.findScrollableChild(document.body);
        if (element != null) {
            return element;
        }
        return document.body;
    };
    ScrollTo.prototype.isScrollable = function (element) {
        var hasScrollableSpace = element.clientHeight < element.scrollHeight;
        var hasVisibleOverflow = getComputedStyle(element, null).overflow === 'visible';
        return hasScrollableSpace && !hasVisibleOverflow;
    };
    ScrollTo.prototype.isScriptTag = function (element) {
        return element.nodeName === 'SCRIPT';
    };
    ScrollTo.prototype.findScrollableChild = function (inputElement) {
        var scrollableElement;
        var i = 0;
        if (this.isScriptTag(inputElement)) {
            return null;
        }
        while (scrollableElement == null && i < inputElement.childElementCount) {
            var element = inputElement.children[i];
            if (this.isScrollable(element)) {
                scrollableElement = element;
                return element;
            }
            scrollableElement = this.findScrollableChild(element);
            i++;
        }
        return scrollableElement;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ScrollTo.prototype, "scrollableElementSelector", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ScrollTo.prototype, "scrollTargetSelector", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], ScrollTo.prototype, "scrollYTarget", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], ScrollTo.prototype, "scrollOffSet", void 0);
    __decorate([
        core_1.HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ScrollTo.prototype, "onClick", null);
    ScrollTo = __decorate([
        core_1.Directive({
            selector: '[scrollTo]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], ScrollTo);
    return ScrollTo;
}());
exports.ScrollTo = ScrollTo;
//# sourceMappingURL=scrollTo.js.map