# Code Typing Game

## Overview

The Code Typing Game is a simple and interactive web application where users type pre-defined code snippets as quickly and accurately as possible. The app provides real-time feedback on the user's progress, helping them practice coding syntax and improve typing speed.

## Project Structure

```bash
├── assets
│ ├── css
│ │ └── style.css
│ └── scripts
│ └── typing.js
└── index.html
```

## File Details

### `assets/css/style.css`

- Contains styles to ensure the application has a modern and clean appearance.
- Implements a dark theme with clear typography for code-focused readability.

### `assets/scripts/typing.js`

### `index.html`

- Provides the structure and layout of the web page.
- Links the external CSS and JavaScript for styling and interactivity.

## Features

### Dynamic Code Snippets

- Randomly selects from an array of JavaScript code snippets for the user to type.

### Real-Time Feedback

- Provides feedback based on input:
- Correct: Displays "Correct!" with green text.
- Incomplete: Displays "Keep typing..." with orange text.
- Incorrect: Displays "Incorrect, check your code!" with red text.

### Enhanced Typing Experience

- Automatically handles:
- Tab insertion for indentation.
- Autocompletion of parentheses and double quotes.

## How to Use

### Open the App

- Open `index.html` in a browser.

### Start Typing

- The displayed code snippet will appear at the top.
- Type the code exactly as shown in the input area.

### Get Feedback

- Receive real-time updates on your progress:
- Correct input.
- Errors or missing characters.

## Customization

### Add Your Own Snippets

- Modify the codeSnippets array in assets/scripts/typing.js to include your desired code snippets.

### Adjust Styling

- Update assets/css/style.css to personalize the design (e.g., change colors or fonts).

## Example Snippets

Here are some pre-loaded snippets in the game:

```javascript
function createHelloWorld() {
  const greeting = "Hello World";
  return function () {
    return greeting;
  };
}

const createCounter = function (n) {
  return () => n++;
};
```

## Technologies Used

- HTML5: Structuring the application.
- CSS3: Styling the app with a clean, dark theme.
- JavaScript (ES6+): Adding interactive features and dynamic functionality.

## Future Enhancements

- Timer to track typing speed.
- Scoreboard to track performance over time.
- Support for multiple programming languages.

## License

This project is open-source and available under the MIT License. Feel free to modify and share!

## Author

Johnny
A passionate developer and gaming coach, combining fun with learning through interactive applications.
