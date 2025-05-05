import UpdatedSimpleComputedSignal from "./UpdatedComputedSimplesignal";
import UpdatedSimpleSignal from "./UpdatedSimpleSignal";

// Usage example
const baseCount = UpdatedSimpleSignal(2);
const doubleCount = UpdatedSimpleComputedSignal(() => baseCount() * 2);

console.log(`Double count: ${doubleCount()}`);

baseCount.set(4); 

console.log(`Double count: ${doubleCount()}`); // Logs: "Double count: 8"

baseCount.set(8);
console.log(`Double count: ${doubleCount()}`); // Logs: "Double count: 16

baseCount.set(16);
console.log(`Double count: ${doubleCount()}`); // Logs: "Double count: 32
