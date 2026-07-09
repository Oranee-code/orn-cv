# orn-cv



A modern, interactive portfolio website designed to look and feel like a professional one-page CV/resume while showcasing my software development skills.

## Project Goal

Create a clean, elegant, single-page scrolling portfolio that resembles a printed resume but is built as a modern web application.

The website should combine the professionalism of a traditional CV with subtle animations and interactive features without sacrificing readability.

---

# Tech Stack

- React
- TypeScript
- Tailwind CSS
- Vite
- Framer Motion (for subtle animations if needed)

---

# Design Vision

The entire website should appear like a premium A4 resume.

## Layout

- Single scrolling page
- Responsive design
- Looks like a printed CV on desktop
- Mobile-friendly while maintaining the same visual identity

### Header

Top Left
- Circular profile photo

Top Right
- Full Name
- Professional Title
- Short professional summary (optional)

---

## Main Layout

The page is split into two sections.

### Left Sidebar (approximately 25%)

Use a different background color from the main content.

Suggested content:

- Contact Information
- Skills
- Languages
- Certifications
- Education
- Links
  - GitHub
  - LinkedIn
  - Portfolio
- Interests (optional)

### Right Content (approximately 75%)

Main resume content.

Sections include:

- About Me
- Experience
- Projects
- Education
- Certifications
- Technical Skills
- Awards (optional)

---

# Theme

The website must support:

- 🌞 Light Mode
- 🌙 Dark Mode

Requirements:

- Theme switch button always visible
- Remember user preference using localStorage
- Smooth transition between themes

---

# UI Style

Design should be:

- Minimal
- Professional
- Modern
- Elegant
- Easy to read
- Premium feeling
- Lots of whitespace
- Smooth scrolling
- Subtle animations only

Avoid flashy effects.

---

# Color Palette

Left Sidebar:
- Different accent color

Right Content:
- Clean neutral background

Support both light and dark themes.

---

# Typography

Use modern fonts.

Recommended:

- Inter
- Geist
- Poppins

Hierarchy:

- Large name
- Medium section titles
- Clean body text

---

# Components

Possible React components:

```
App
│
├── Header
├── Sidebar
│   ├── Contact
│   ├── Skills
│   ├── Education
│   ├── Certifications
│   └── Links
│
├── MainContent
│   ├── About
│   ├── Experience
│   ├── Projects
│   ├── Education
│   ├── Certifications
│   └── TechnicalSkills
│
├── ThemeToggle
└── Footer
```

---

# User Experience

The website should feel like:

- Reading a professional resume
- Smooth scrolling through sections
- Fast loading
- Accessible
- Mobile responsive
- Clean navigation

---

# Future Features

Potential additions:

- Download Resume (PDF)
- Print-friendly version
- Project filtering
- Animated skill progress
- Contact form
- Blog section
- Multi-language support

---

# Development Guidelines

- Use TypeScript everywhere.
- Keep components reusable.
- Keep code clean and maintainable.
- Prefer composition over large components.
- Use Tailwind utility classes.
- Avoid unnecessary dependencies.
- Keep animations subtle.
- Ensure accessibility (ARIA labels, keyboard navigation, color contrast).
- Follow consistent naming conventions.

---

# Project Structure

```
src/
│
├── assets/
├── components/
├── sections/
├── hooks/
├── layouts/
├── data/
├── utils/
├── styles/
├── types/
└── App.tsx
```

---

# Primary Objective

Build a portfolio website that:

- Looks like a beautifully designed resume.
- Uses a 25% sidebar and 75% main content layout.
- Features a circular profile photo in the top-left.
- Displays my name and professional title in the top-right.
- Includes a light/dark mode toggle.
- Is fully responsive.
- Is built with React, TypeScript, Tailwind CSS, and Vite.
- Reflects my professionalism as a Full Stack Developer, Cloud Computing, and Cybersecurity graduate.

The final result should be simple, elegant, memorable, and polished enough to impress recruiters while remaining easy to maintain and extend.