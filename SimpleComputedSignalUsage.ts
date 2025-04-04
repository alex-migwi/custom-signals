import SimpleComputedSignal from "./SimpleComputedSignal";
import SimpleSignal from "./SimpleSignal";

// Usage:
const baseCount = new SimpleSignal(2);
const doubleCount = new SimpleComputedSignal(() => baseCount.get() * 2);

console.log(`Double Count 1: ${doubleCount.get()}`);

baseCount.set(3); // Logs: "Double Count 2: 6"

console.log(`Double Count 2: ${doubleCount.get()}`);
