function UpdatedSimpleComputedSignal<T>(computeFn: () => T) {
    const signal = (() => computeFn()) as (() => T) & {
      effect: (listener: () => void) => void;
    };
  
    const listeners: (() => void)[] = [];
  
    signal.effect = (listener: () => void) => {
      listeners.push(listener);
      listener();
    };
  
    const notify = () => {
      listeners.forEach((listener) => listener());
    };
  
    // Automatically track dependencies and notify listeners
    const originalCompute = computeFn;
    computeFn = () => {
      notify();
      return originalCompute();
    };
  
    return signal;
}
  
export default UpdatedSimpleComputedSignal;

  