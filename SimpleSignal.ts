class SimpleSignal<T> {
  private value: T;
  private listeners: (() => void)[] = [];

  constructor(initialValue: T) {
    this.value = initialValue;
  }

  // Getter for the current value
  get(): T {
    return this.value;
  }

  // Setter for the value, notifying all listeners
  set(newValue: T): void {
    this.value = newValue;
    this.notify();
  }

  // Subscribe to changes
  effect(listener: () => void): void {
    this.listeners.push(listener);
    // Run the effect once initially
    listener();
  }

  // Notify all listeners of the value change
  private notify(): void {
    for (const listener of this.listeners) {
      listener();
    }
  }
}

export default SimpleSignal;
