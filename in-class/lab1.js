<script>
    // Prompt the user for answers and store them in variables
    var favoriteColor = prompt("What's your favorite color?");
    var dreamDestination = prompt("Where is your dream vacation destination?");
    var animalChoice = prompt("If you were an animal, what would you be?");
    var favoriteFood = prompt("What's your favorite food?");

    // Concatenate the responses into an alert message
    var alertMessage = "Greetings, " + favoriteColor + " traveler to " + dreamDestination + ". As a " + animalChoice + ", you must enjoy " + favoriteFood + "!";
    alert(alertMessage);

    // Log the user's responses in the console
    console.log("Favorite Color: " + favoriteColor);
    console.log("Dream Destination: " + dreamDestination);
    console.log("Animal Choice: " + animalChoice);
    console.log("Favorite Food: " + favoriteFood);
</script>