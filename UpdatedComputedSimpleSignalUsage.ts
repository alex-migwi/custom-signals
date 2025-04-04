import UpdatedSimpleComputedSignal from "./UpdatedComputedSimplesignal";
import UpdatedSimpleSignal from "./UpdatedSimpleSignal";

// Usage
const baseCount = UpdatedSimpleSignal(2);
const doubleCount = UpdatedSimpleComputedSignal(() => baseCount() * 2);

console.log(`Double count: ${doubleCount()}`);

baseCount.set(4); // Logs: "Double count: 8"

console.log(`Double count: ${doubleCount()}`);
