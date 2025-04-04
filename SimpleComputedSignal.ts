
class SimpleComputedSignal<T> {
  private computeFn: () => T;
  private listeners: (() => void)[] = [];
  private cachedValue!: T;

  constructor(computeFn: () => T) {
    this.computeFn = computeFn;
    this.cachedValue = this.computeFn();
  }

  get(): T {
    this.update();
    return this.cachedValue;
  }

  update(): void {
    this.cachedValue = this.computeFn();
    this.notify();
  }

  effect(listener: () => void): void {
    this.listeners.push(listener);
    listener();
  }

  private notify(): void {
    for (const listener of this.listeners) {
      listener();
    }
  }
}

export default SimpleComputedSignal;
