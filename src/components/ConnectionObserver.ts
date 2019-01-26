/**
 * Connection  observer.
 * Observe the internet connection and notifies when a online/offline event occurs.
 */
class ConnectionObserver {
  private listeners: Function[] = [];

  /**
   * Subscribe a listener function to get notified when a connection event has fired.
   * @param handler
   */
  public subscribe(listener: Function) {
    if (this.listeners.length === 0) {
      this.startObserving();
    }

    this.listeners.push(listener);
  }

  /**
   * Handle unsubscribe from the notification
   * @param handler
   */
  public unSubscribe(listener: Function) {
    this.listeners.filter(storedHandler => storedHandler !== listener);

    if (this.listeners.length === 0) {
      this.stopObserving();
    }
  }

  /**
   * Start observing the online/offline events by adding the eventlisteners to the window.
   */
  private startObserving() {
    window.addEventListener("online", this.notify);
    window.addEventListener("offline", this.notify);
  }

  /**
   * Remove the eventlisteners online/offline eventlisteners from the window object.
   */
  private stopObserving() {
    window.removeEventListener("online", this.notify);
    window.removeEventListener("offline", this.notify);
  }

  /**
   * Connection event fires when a online/offline event is fired. This event is notified to all the listeners.
   * @param event
   */
  private notify(event: UIEvent) {
    this.listeners.forEach(listener => listener(event));
  }
}

export default new ConnectionObserver();
