# Interactive Star Rating Widget

A polished, responsive five-star rating component built with semantic HTML, modern CSS, and vanilla JavaScript. Users can preview a rating, select it, and reset their feedback.

## Features

- Exactly five interactive, individually labeled stars
- Hover and keyboard-focus previews that do not alter the saved rating
- Persistent selected rating with a clear feedback message
- Reset button to clear the rating
- Keyboard-operable star buttons with visible focus styles
- Responsive layout, reduced-motion support, and no JavaScript dependencies

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript

## Project Structure

```text
star-rating-widget/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Run Locally

1. Download or clone this project.
2. Open `index.html` in a modern web browser.

No build step or package installation is required. The selected rating is held in memory and resets when the page is reloaded.

## How the Rating Works

Each star is a button with a `data-rating` value from 1 to 5. Hovering over or keyboard-focusing a star previews that rating by filling it and all earlier stars. The preview is stored separately from the selected rating, so leaving the star row restores the saved selection. Clicking a star saves the rating and updates the message. **Reset Rating** clears the saved selection and restores the default state.
