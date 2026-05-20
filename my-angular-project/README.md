# 🎓 Angular Learning Journey: Smart Recipe Box

This repository tracks my progress as I learn Modern Angular (v20) through a guided, project-based tutorial. I am building the **Smart Recipe Box** application while mastering core concepts and best practices.

## 🚀 Progress Report

### Phase 1: Angular Fundamentals
*   **Module 1: Getting Started** ✅
    *   *Concept:* Component anatomy (Logic, Template, Styles).
    *   *Achievement:* Successfully cleared the default Angular boilerplate and established the app identity with a custom `<h1>` header.
*   **Module 2: Dynamic Text with Interpolation** ✅
    *   *Concept:* Signals and Template Interpolation `{{ }}`.
    *   *Achievement:* Refactored the app title into a `protected readonly` signal and displayed it dynamically.
*   **Module 3: Event Listeners** ✅
    *   *Concept:* DOM Events and `(click)` bindings.
    *   *Achievement:* Added interactive buttons that trigger custom methods to log messages to the browser console.

### Phase 2: State and Signals
*   **Module 4: State Management (Part 1: `set`)** ✅
    *   *Concept:* Writable Signals and the `.set()` method.
    *   *Achievement:* Implemented a `recipe` signal and built a mechanism to switch between different mock recipes instantly.
*   **Module 5: State Management (Part 2: `update`)** ✅
    *   *Concept:* Modifying state with the `.update()` method.
    *   *Achievement:* Created a `servings` counter and used functional updates with `Math.max(1, ...)` to ensure a valid state.
*   **Module 6: Computed Signals** ✅
    *   *Concept:* Derived reactive state with `computed()`.
    *   *Achievement:* Developed a complex `adjustedIngredients` signal that automatically recalculates quantities whenever the recipe or servings change. Used modern `@for` blocks for rendering.

---
*Status: Currently working on **Phase 3: Component Architecture**.*
