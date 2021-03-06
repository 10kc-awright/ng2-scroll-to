import { ElementRef } from '@angular/core';
export declare class ScrollTo {
    private el;
    scrollableElementSelector: string;
    scrollTargetSelector: string;
    scrollYTarget: number;
    scrollOffSet: number;
    constructor(el: ElementRef);
    onClick(event: MouseEvent): void;
    private getScrollableElement(target);
    private getTarget();
    private smoothScroll(element, end);
    easeInOutCubic(t: number): number;
    /**
      * calculate the scroll position we should be in
      * given the start and end point of the scroll
      * the time elapsed from the beginning of the scroll
      * and the total duration of the scroll (default 500ms)
      */
    private position(start, end, elapsed, duration);
    /**
      * finds scrollable parent of an element
      * @method findScrollableParent
      * @param {HTMLElement} element
      * @returns {HTMLElement} element
      */
    private findScrollableParent(element);
    /**
      * finds scrollable parent of an element
      * @method findMainScrollableElement
      * @returns {HTMLElement} element
      */
    private findMainScrollableElement();
    private isScrollable(element);
    private isScriptTag(element);
    private findScrollableChild(inputElement);
}
