// Coding Challenge: Track Mouse Position
// Goal:
// Create a component that tracks the mouse position and passes it down to another component once using HOC and once using Render Props.

// 🔹 Part 1: Using a Higher-Order Component (HOC)
// ✅ Steps:
// Create a withMousePosition HOC.

// This HOC should wrap a component and pass it x and y mouse coordinates as props.

// Create a DisplayMouse component that shows the coordinates using props.

// 🧪 Example output:
// jsx
// Copy
// Edit
// Mouse Position: X - 123, Y - 456
// 🔹 Part 2: Using Render Props
// ✅ Steps:
// Create a MouseTracker component that tracks the mouse position.

// Instead of rendering JSX directly, it should call this.props.render(x, y) and let the parent decide what to render.

// Create a MousePositionDisplay component that uses this render prop.

// 🧩 Extra:
// Add a <ToggleButton /> to switch between HOC and Render Props-based views on the same screen.

// 💡 Hints:
// Use onMouseMove and state to track the x and y coordinates.

// Use window.addEventListener('mousemove', callback) or onMouseMove on a wrapper div.

// Want the starter boilerplate?
// Let me know if you'd like the skeleton or base structure for this, or want to implement it fully from scratch and get feedback after.








