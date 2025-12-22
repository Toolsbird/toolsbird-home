# ToolsBird Landing Page

A modern, responsive landing page for the ToolsBird utility platform. This project showcases a clean, aesthetic design with interactive elements and high-quality visuals.

## 🏗️ Architecture Overview

The project follows a standard **Vanilla Web Architecture** (HTML/CSS/JS) with no external framework dependencies, ensuring high performance and ease of customization.

### 📂 File Structure

- **`index.html`**: The semantic structure of the page.
  - **Header**: Sticky navigation bar.
  - **Hero Section**: Contains the main value proposition, an interactive SVG bird illustration (manipulated via CSS/JS), and a preview card stack.
  - **Tools Section**: A grid display of available utilities ("Browser Calculator", "Screenshot Tool").
  - **Footer**: Standard footer links and branding.

- **`styles.css`**: The design system and presentation logic.
  - **Root Variables**: Defines a global design token system for colors (`--primary-orange`, etc.), spacing, and shadows to maintain consistency.
  - **CSS Reset**: Basic reset for standardizing browser defaults.
  - **Animations**: Keyframe animations for the bird (`flap`, `chirp`), entrance effects (`slideIn`), and floating elements.
  - **Responsive Design**: Mobile-first approach using `@media` queries to adapt layouts (stacking grids, resizing SVGs) for Tablets (1024px, 768px) and Mobile (480px).

- **`script.js`**: The behavior layer.
  - **Navigation**: Smooth scrolling for anchor links and active link highlighting based on scroll position.
  - **Observers**: Uses `IntersectionObserver` to trigger fade-in animations on scroll.
  - **Interactive Elements**: Handles button hover effects (bird "chirping" and moving) and optional mouse tracking effects.

## 🚀 Key Features

- **Dynamic SVG Animation**: The hero section features a custom SVG bird that animates (wings flap) and reacts to user interactions (beak chirps on button hover).
- **Responsive Layout**: The layout seamlessly adapts from desktop to mobile. On mobile, the content order is optimized (Text/Bird -> Tools Preview) for better UX.
- **Glassmorphism**: Uses semi-transparent backgrounds and blurs (`backdrop-filter`) for a modern, premium feel.
- **Micro-interactions**: Hover states on cards, buttons, and navigation links enhance user engagement.

## 🛠️ Tech Stack

- **HTML5**: Semantic markup.
- **CSS3**: Variables, Flexbox, Grid, Animations.
- **JavaScript (ES6+)**: DOM manipulation, Event Listeners, Intersection Observer API.

## 🏃‍♂️ How to Run

Simply open the `index.html` file in any modern web browser (Chrome, Firefox, Safari, Edge). No build step or server is required.
