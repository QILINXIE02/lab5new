
    // Prompt the user for answers and store them in variables
    var name = prompt("Question 1: What is your name?");
    var favoriteDay = prompt("Question 2: What's your favorite day of the week?");
    var favoriteMonth = prompt("Question 3: What's your favorite month of the year?");
    var goodDay = prompt("Question 4: Are you having a good day? (Yes or No)");

    // Get the current date
    var currentDate = new Date();
    var dayOfWeek = currentDate.toLocaleDateString('en-US', { weekday: 'long' });

    // Concatenate the responses into an alert message
    var alertMessage = "Hello, " + name + "! Your favorite day is " + favoriteDay + ", your favorite month is " + favoriteMonth + ", and you are " + (goodDay.toLowerCase() === 'yes' ? "having a good day!" : "not having a good day.") + " Today is " + dayOfWeek + ".";
    alert(alertMessage);

    // Log the user's responses in the console
    console.log("Response 1 - Name: " + name);
    console.log("Response 2 - Favorite Day: " + favoriteDay);
    console.log("Response 3 - Favorite Month: " + favoriteMonth);
    console.log("Response 4 - Good Day: " + goodDay);

