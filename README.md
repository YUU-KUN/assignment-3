# Greeter Component – Vue 3

A lightweight, embeddable Vue 3 component that renders a button and displays a customizable message in the browser console when clicked. This component is designed to be inserted into **any third-party app** via a simple `<script>` tag.

---

## 🚀 Features

- 📦 Self-contained and framework-agnostic once built
- 🎯 Configurable via `Greeter.init(selector, { message })`
- 💬 Message injected from host app
- 🔄 Built with Vue 3 and supports Virtual DOM diffing
- ✅ Safe to embed in existing sites or apps

---

## 🧠 Why Use the Virtual DOM?

Vue 3 uses a Virtual DOM under the hood to:

- Efficiently update only the changed parts of the DOM
- Keep rendering predictable and declarative
- Enable component-level encapsulation with reactive state

Even though this component is simple (only one button), we **chose to keep using Vue's Virtual DOM** because:

- It keeps the structure declarative and clean
- It allows future expansion (like adding animations, slots, or dynamic styling) with minimal overhead
- The performance cost is negligible for such a small use case

In short, we chose Virtual DOM **because it's built-in, efficient, and scalable** for future needs.

---

## 📦 Build Instructions

````bash
# Install dependencies
npm install

# Build the library
npm run build


## 🚀 How to Use

```html
<!-- Include the compiled CSS and JS -->
<link rel="stylesheet" href="dist/compiled-greeter-component.css"> 
<script src="compiled-greeter-component.iife.js"></script>
<div id="my-component"></div>
<script>
  Greeter.init('#my-component', { message: 'Hello from host!' })
</script>
````
