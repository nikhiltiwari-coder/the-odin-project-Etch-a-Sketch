
# Etch-a-Sketch

An interactive, browser-based drawing pad built as part of [The Odin Project's](https://www.theodinproject.com/) Foundations curriculum. 

This project demonstrates core front-end fundamentals—specifically DOM manipulation, dynamic element generation, event-driven programming, and CSS Flexbox layout principles without relying on CSS Grid or external libraries.

---

## ✨ Features
* **Dynamic Grid Generation:** Generates an $N \times N$ canvas dynamically using vanilla JavaScript (`document.createElement`).
* **Interactive Drawing:** Leaves a pixel-trail sketch when the mouse hovers over canvas cells.
* **Custom Resolution:** Allows users to change the grid resolution (up to $100 \times 100$) while preserving the overall container dimensions.
* **Pure Flexbox Layout:** Engineered using Flexbox sizing algorithms (`flex-wrap`, calculated pixel/percentage dimensions) without CSS Grid.

*(Optional – include if you implemented extra credit:)*
* **Rainbow Brush:** Randomizes RGB values on every mouse sweep.
* **Progressive Shading:** Darkens cells incrementally by 10% on each hover pass until fully opaque.

---

## 🛠️ Built With
* **HTML5:** Semantic document structure and UI controls.
* **CSS3:** Flexbox for grid wrapping, transitions, and responsive container constraints.
* **JavaScript (ES6):** DOM selection, event listeners (`mouseover`, `click`), and dynamic style injection.

---

## 💡 Key Learnings
* Constructing and clearing DOM subtrees programmatically without reloading the document.
* Calculating dynamic dimensions ($960\text{px} / N$) and handling `box-sizing: border-box` to prevent flex-wrap overflow.
* Managing browser performance constraints by setting sensible input bounds for dynamic node creation.