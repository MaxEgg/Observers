"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Because we don't want to fill up the browser with redundant event listeners it's done through the observer design pattern.
 */
var ResizeObserver = /** @class */ (function () {
    function ResizeObserver() {
        this.listeners = [];
    }
    /**
     * Add a listener to the listener collection.
     * @param listener The listener to add.
     */
    ResizeObserver.prototype.subscribe = function (listener) {
        if (this.listeners.length === 0) {
            this.startListener();
        }
        this.listeners.push(listener);
    };
    /**
     * Remove a listener from the listener collection.
     * @param listener
     */
    ResizeObserver.prototype.unSubscribe = function (listener) {
        if (this.listeners.length === 0) {
            this.stopListener();
        }
        this.listeners.filter(function (collectedListener) { return collectedListener !== listener; });
    };
    /**
     * Start the resize event listener.
     */
    ResizeObserver.prototype.startListener = function () {
        window.addEventListener("resize", this.notify);
    };
    /**
     * Stop the resize event listener.
     */
    ResizeObserver.prototype.stopListener = function () {
        window.removeEventListener("resize", this.notify);
    };
    /**
     * Notify all listeners.
     * @param event
     */
    ResizeObserver.prototype.notify = function (event) {
        this.listeners.forEach(function (callback) { return callback(event); });
    };
    return ResizeObserver;
}());
exports.default = new ResizeObserver();
