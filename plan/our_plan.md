# Implementation Plan: Financial Planner Portfolio on GitHub Pages

## Objective
Build and deploy a simple, modern portfolio website for a financial planner ("Kittipot Mike") using vanilla HTML, CSS, and JavaScript. The site will feature a dark theme, use the JetBrains Mono font, include placeholders for 3 projects, and provide contact details. It will be deployed using GitHub Pages.

## Key Files & Structure
- `index.html`: The main structure of the single-page portfolio (Hero, Projects, Contact).
- `style.css`: Custom styling for the dark theme, layout, and typography.
- `script.js`: Minimal JavaScript for smooth scrolling or simple interactivity (if needed).
- `.gitignore`: To ignore unnecessary files.
- `README.md`: Basic project documentation.

## Implementation Steps

### Phase 1: Local Development & Setup
1. **Initialize Project:**
   - Create a new directory for the project.
   - Create `index.html`, `style.css`, and `script.js` files in the root.
2. **HTML Structure (`index.html`):**
   - Set up the HTML5 boilerplate.
   - Import the "JetBrains Mono" font from Google Fonts.
   - Create a `<nav>` for basic navigation.
   - Create the **Hero Section** featuring the name "Kittipot Mike" and the title "Financial Planner".
   - Create the **Projects Section** with 3 placeholder cards for financial projects/case studies.
   - Create the **Contact Section** with email/social links.
3. **Styling (`style.css`):**
   - Implement a modern dark theme (e.g., deep charcoal background `#121212`, off-white text `#e0e0e0`, and a subtle accent color).
   - Apply `font-family: 'JetBrains Mono', monospace;` globally.
   - Style the project cards with hover effects.
   - Ensure the layout is responsive (mobile-friendly).
4. **Interactivity (`script.js`):**
   - Add smooth scrolling for navigation links to sections on the page.

### Phase 2: Version Control & GitHub Setup
1. **Git Initialization:**
   - Run `git init`.
   - Add a simple `.gitignore`.
   - Commit the initial files.
2. **GitHub Repository:**
   - Create a new public repository on GitHub (e.g., `kittipot-portfolio`).
   - Add the remote origin and push the `main` branch to GitHub.

### Phase 3: Deployment to GitHub Pages
1. **Enable GitHub Pages:**
   - Navigate to the repository settings on GitHub.
   - Go to the **Pages** section.
   - Select the `main` branch and the `/ (root)` folder as the source.
   - Save and wait for the deployment to complete.

## Verification & Testing
- Verify that the local site renders correctly in the browser.
- Check responsiveness on different screen sizes (mobile, tablet, desktop).
- Confirm that the dark theme and JetBrains Mono font are applied correctly.
- Verify that the GitHub Pages URL successfully serves the site and updates upon new commits.