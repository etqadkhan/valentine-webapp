# Valentine Webapp 💕

A beautiful and interactive web application for asking "Will you be my valentine?" with a playful twist - the "No" button runs away from your cursor!

## Overview

This webapp provides a romantic and engaging way to ask someone to be your valentine. The application features an interactive interface where the "No" button cleverly moves away from the cursor, making it nearly impossible to click, while the "Yes" button is large and inviting. After clicking "Yes", users are taken to a celebration page with a congratulatory message.

## ✨ Features

- **Interactive "No" Button**: The small "No" button moves away from the cursor when you try to hover over it
- **Large "Yes" Button**: The "Yes" button is prominently displayed and easy to click
- **Beautiful Animations**: 
  - Floating hearts in the background
  - Smooth fade-in effects
  - Pulsing question text
  - Bouncing celebration page
- **Valentine-themed Design**: Pink gradient backgrounds, romantic color scheme
- **Responsive Design**: Works beautifully on desktop, tablet, and mobile devices
- **Celebration Page**: Customizable success page after clicking "Yes"

## 🚀 Getting Started

### Running Locally

1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! No build process or dependencies needed.

### File Structure

```
valentine-app/
├── index.html          # Main page with the question
├── yay.html            # Celebration page after clicking Yes
├── styles.css          # All styling and animations
├── script.js           # Interactive button logic
├── README.md           # This file
├── HOW_IT_WORKS.md     # Detailed technical explanation
└── netlify-deploy.md   # Deployment guide
```

## 🛠️ Tech Stack

- **HTML5**: Structure and content
- **CSS3**: Styling, animations, and responsive design
- **Vanilla JavaScript**: Interactive functionality (no frameworks needed!)

## 📖 Documentation

- **[HOW_IT_WORKS.md](./HOW_IT_WORKS.md)**: Detailed explanation of how the webapp works, including the moving button algorithm
- **[netlify-deploy.md](./netlify-deploy.md)**: Step-by-step guide for deploying to Netlify

## 🌐 Deployment

This is a static website that can be deployed to any static hosting service:

- **Netlify**: See `netlify-deploy.md` for instructions
- **Vercel**: Simply drag and drop the folder
- **GitHub Pages**: Push to a repository and enable Pages
- **Any web server**: Just upload the files!

## 🎨 Customization

Want to personalize it? Here are some easy customizations:

- **Change the question**: Edit the text in `index.html`
- **Modify celebration message**: Edit `yay.html`
- **Adjust button sizes**: Change padding/font-size in `styles.css`
- **Change colors**: Modify gradient colors in `styles.css`
- **Adjust escape distance**: Change the `200` value in `script.js` (line 23)
- **Add more hearts**: Add more `<div class="heart"></div>` elements in the HTML

See `HOW_IT_WORKS.md` for more detailed customization tips.

## 💡 How It Works

The key feature is the moving "No" button. The JavaScript:
1. Tracks the cursor position
2. Calculates the distance to the button
3. Moves the button away from the cursor when it gets too close
4. Uses CSS `transform` for smooth, performant movement

For a complete technical explanation, check out [HOW_IT_WORKS.md](./HOW_IT_WORKS.md).

## 📱 Browser Support

Works in all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 🎯 Usage

1. Open `index.html` in a web browser
2. The question "Will you be my Valentine? 💕" appears
3. Try to click "No" - it will move away from your cursor!
4. Click the large "Yes 💖" button
5. Enjoy the celebration page!

## 📝 License

This project is created for personal use. Feel free to use and modify as needed.

---

Made with 💕 for a special someone
