function UpdatedSimpleComputedSignal<T>(computeFn: () => T) {
  const signal = (() => computeFn()) as () => T;

  const listeners: (() => void)[] = [];

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
