function UpdatedSimpleSignal<T>(initialValue: T) {
    let value = initialValue;
    const listeners: (() => void)[] = [];
  
    // The callable signal function
    const signal = (() => value) as (() => T) & {
      set: (newValue: T) => void;
      effect: (listener: () => void) => void;
    };
  
    // Add the `set` method to update the value and notify listeners
    signal.set = (newValue: T) => {
      value = newValue;
      listeners.forEach((listener) => listener());
    };
  
    // Add the `effect` method to register listeners
    signal.effect = (listener: () => void) => {
      listeners.push(listener);
      // Run the effect immediately
      listener();
    };
  
    return signal;
  }

  
export default UpdatedSimpleSignal;