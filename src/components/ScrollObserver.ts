/**
 * Because we don't want to fill up the browser with redundant event listeners it's done through the observer design pattern.
 */
class ScrollObserver {
  private listeners: Function[] = [];

  /**
   * Add a listener to the listener collection.
   * @param listener The listener to add.
   */
  public subscribe(listener: Function) {
    if (this.listeners.length === 0) {
      this.startListener();
    }

    this.listeners.push(listener);
  }

  /**
   * Remove a listener from the listener collection.
   * @param listener
   */
  public unSubscribe(listener: Function) {
    if (this.listeners.length === 0) {
      this.stopListener();
    }

    this.listeners.filter((collectedListener) => collectedListener !== listener);
  }

  /**
   * Start the resize event listener
   */
  private startListener() {
    window.addEventListener("scroll", this.notify);
  }

  /**
   * Stop the resize event listener.
   */
  private stopListener() {
    window.removeEventListener("scroll", this.notify);
  }

  /**
   * Notify all the listeners.
   * @param event
   */
  private notify(event: UIEvent) {
    this.listeners.forEach(callback => callback(event));
  }
}

export default new ScrollObserver();
