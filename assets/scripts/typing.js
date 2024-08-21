// Array of code snippets
const codeSnippets = [
  `
  function createHelloWorld() {
  const greeting = "Hello World";

  return function() {
    return greeting;
  };
};
  `.trim(),

  `
  const createCounter = function(n) {
  return () => n++;
};
  `.trim(),
];

// Function to randomly select a code snippet
function getRandomSnippet() {
  const randomIndex = Math.floor(Math.random() * codeSnippets.length);
  return codeSnippets[randomIndex];
}

// Set the selected code snippet
const codeSnippet = getRandomSnippet();

// Display the selected code snippet
document.getElementById("code-display").textContent = codeSnippet;

const codeInput = document.getElementById("code-input");
const feedback = document.getElementById("feedback");

// Event listener to check user's input against the selected code snippet
codeInput.addEventListener("input", () => {
  const userInput = codeInput.value;

  if (userInput === codeSnippet) {
    feedback.textContent = "Correct!";
    feedback.style.color = "limegreen";
  } else if (codeSnippet.startsWith(userInput)) {
    feedback.textContent = "Keep typing...";
    feedback.style.color = "orange";
  } else {
    feedback.textContent = "Incorrect, check your code!";
    feedback.style.color = "red";
  }
});

// Event listener to handle Tab key for inserting spaces
codeInput.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    e.preventDefault();

    // Get the current cursor position
    const start = codeInput.selectionStart;
    const end = codeInput.selectionEnd;

    // Insert two spaces at the cursor position
    codeInput.value =
      codeInput.value.substring(0, start) +
      "  " +
      codeInput.value.substring(end);

    // Move the cursor position after the inserted spaces
    codeInput.selectionStart = codeInput.selectionEnd = start + 2;
  }
});
