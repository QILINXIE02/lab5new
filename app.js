function updateGreeting() {
    const nameInput = document.getElementById('nameInput');
    const greetingElement = document.getElementById('greeting');
    const name = nameInput.value.trim();

    if (name) {
        greetingElement.textContent = `Hey, ${name}! Thanks for visiting our shop. If you're ready to order, please call 1-503-###-#####`;
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

function displaySandwichImages() {
    const sandwichInput = document.getElementById('sandwichInput');
    const sandwichCount = parseInt(sandwichInput.value);

    const sandwichImagesContainer = document.getElementById('sandwichImages');
    sandwichImagesContainer.innerHTML = '';

    if (!isNaN(sandwichCount) && sandwichCount > 0 && sandwichCount <= 100) {
        for (let i = 1; i <= sandwichCount; i++) {
            const image = document.createElement('img');
            image.src = 'image_url_here'; // Replace with the actual image URL
            image.alt = `Sandwich ${i}`;
            sandwichImagesContainer.appendChild(image);

            const counter = document.createElement('p');
            counter.textContent = `Image #${i}`;
            sandwichImagesContainer.appendChild(counter);
        }
    } else if (sandwichCount > 100) {
        showError(sandwichImagesContainer, 'Please enter a number less than or equal to 100.');
    } else {
        showError(sandwichImagesContainer, 'Please enter a valid number greater than 0.');
    }
}

if (confirm("Do you want to customize the page?")) {
    const userColor = promptWithValidation("Enter a color for the page background:", inputIsValid);
    document.body.style.backgroundColor = userColor;
}