"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Connection  observer.
 * Observe the internet connection and notifies when a online/offline event occurs.
 */
var ConnectionObserver = /** @class */ (function () {
    function ConnectionObserver() {
        this.listeners = [];
    }
    /**
     * Subscribe a listener function to get notified when a connection event has fired.
     * @param handler
     */
    ConnectionObserver.prototype.subscribe = function (listener) {
        if (this.listeners.length === 0) {
            this.startObserving();
        }
        this.listeners.push(listener);
    };
    /**
     * Handle unsubscribe from the notification
     * @param handler
     */
    ConnectionObserver.prototype.unSubscribe = function (listener) {
        this.listeners.filter(function (storedHandler) { return storedHandler !== listener; });
        if (this.listeners.length === 0) {
            this.stopObserving();
        }
    };
    /**
     * Start observing the online/offline events by adding the eventlisteners to the window.
     */
    ConnectionObserver.prototype.startObserving = function () {
        window.addEventListener("online", this.notify);
        window.addEventListener("offline", this.notify);
    };
    /**
     * Remove the eventlisteners online/offline eventlisteners from the window object.
     */
    ConnectionObserver.prototype.stopObserving = function () {
        window.removeEventListener("online", this.notify);
        window.removeEventListener("offline", this.notify);
    };
    /**
     * Connection event fires when a online/offline event is fired. This event is notified to all the listeners.
     * @param event
     */
    ConnectionObserver.prototype.notify = function (event) {
        this.listeners.forEach(function (listener) { return listener(event); });
    };
    return ConnectionObserver;
}());
exports.default = new ConnectionObserver();
