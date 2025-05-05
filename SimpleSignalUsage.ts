import SimpleSignal from "./SimpleSignal";

// Usage Example
// 1. Create a Signal

const count = new SimpleSignal(0);

// Access the current value
console.log(count.get()); // Output: 0

// 2. Update Signal

count.set(5);
console.log(count.get()); // Output: 5

// 3. Effect

count.effect(() => {
  console.log(`Count changed to: ${count.get()}`);
});

count.set(10); // Logs: "Count changed to: 10"
count.set(20); // Logs: "Count changed to: 20"
count.set(100);
