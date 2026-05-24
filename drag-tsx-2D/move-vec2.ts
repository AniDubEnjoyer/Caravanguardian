"use strict";

/**
 * A 2D element positioned using CSS absolute position.
 */
export default class MoveVec2<ElemType extends HTMLElement = HTMLElement> {
    constructor(
        private _elem?: ElemType,
        private _x?: number,
        private _y?: number,
    ) {
        if (!_elem) return;
        _elem.style.position = "absolute";
        _elem.style.zIndex = "999";
        _elem.style.left = `${_x || 0}px`;
        _elem.style.top = `${_y || 0}px`;
    }

    moveToParent() {
        if (!this._elem) return;
        if (!this._elem.parentElement) return;
        const rect = this._elem.parentElement.getBoundingClientRect();
        this._elem.style.left = `${rect.x}px`;
        this._elem.style.top = `${rect.y}px`;
    }

    get x() {
        return this._x;
    }
    set x(val) {
        if (!this._elem) return;
        this._elem.style.left = `${val}px`;
    }

    get y() {
        return this._y;
    }
    set y(val) {
        if (!this._elem) return;
        this._elem.style.top = `${val}px`;
    }

    get elem() {
        return this._elem;
    }
    set elem(val) {
        this._elem = val;
        if (!this._elem) return;
        this._elem.style.position = "absolute";
        this._elem.style.zIndex = "999";
        this._elem.style.left = `${val}px`;
        this._elem.style.top = `${val}px`;
    }
}
