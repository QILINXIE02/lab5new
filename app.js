function updateGreeting() {
    const nameInput = document.getElementById('nameInput');
    const greetingElement = document.getElementById('greeting');
    const name = nameInput.value.trim(); // Trim to remove leading/trailing spaces

    if (name) {
        greetingElement.textContent = `Hello, ${name}!`;
    } else {
        showError(greetingElement, 'Please enter your name.');
    }
}

function changePageColor() {
    const colorInput = document.getElementById('colorInput');
    const color = colorInput.value;

    if (color) {
        document.body.style.backgroundColor = color;
    }
}

function showError(element, message) {
    element.textContent = message;
    element.style.color = 'red';
}

function inputIsValid(input) {
    return input.trim() !== '';
}

function promptWithValidation(message, validationFunction) {
    let input;
    do {
        input = prompt(message);
    } while (!validationFunction(input));
    return input;
}

// using confirm() and prompt() with validation
if (confirm("Do you want to customize the page?")) {
    const userColor = promptWithValidation("Enter a color for the page background:", inputIsValid);
    document.body.style.backgroundColor = userColor;
}

