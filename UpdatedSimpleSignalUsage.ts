import UpdatedSimpleSignal from "./UpdatedSimpleSignal";

// 1. Create Signal
const baseCount = UpdatedSimpleSignal(0);

// 2. Get the value
console.log(baseCount()); // Output: 0

// 3.   Update the value
baseCount.set(5);
console.log(baseCount()); // Output: 5

// 4. Add Effect
baseCount.effect(() => {
  console.log(`Base count changed to: ${baseCount()}`);
});

baseCount.set(10); // Logs: "Base count changed to: 10"
baseCount.set(20); // Logs: "Base count changed to: 20"
