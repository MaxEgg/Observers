"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Because we don't want to fill up the browser with redundant event listeners it's done through the observer design pattern.
 */
var ScrollObserver = /** @class */ (function () {
    function ScrollObserver() {
        this.listeners = [];
    }
    /**
     * Add a listener to the listener collection.
     * @param listener The listener to add.
     */
    ScrollObserver.prototype.subscribe = function (listener) {
        if (this.listeners.length === 0) {
            this.startListener();
        }
        this.listeners.push(listener);
    };
    /**
     * Remove a listener from the listener collection.
     * @param listener
     */
    ScrollObserver.prototype.unSubscribe = function (listener) {
        if (this.listeners.length === 0) {
            this.stopListener();
        }
        this.listeners.filter(function (collectedListener) { return collectedListener !== listener; });
    };
    /**
     * Start the resize event listener
     */
    ScrollObserver.prototype.startListener = function () {
        window.addEventListener("scroll", this.notify);
    };
    /**
     * Stop the resize event listener.
     */
    ScrollObserver.prototype.stopListener = function () {
        window.removeEventListener("scroll", this.notify);
    };
    /**
     * Notify all the listeners.
     * @param event
     */
    ScrollObserver.prototype.notify = function (event) {
        this.listeners.forEach(function (callback) { return callback(event); });
    };
    return ScrollObserver;
}());
exports.default = new ScrollObserver();
