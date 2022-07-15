function getBotResponse(input) {
    // rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // other responses
    if (input == "hello") {
        return "Hello client";
    } else if (input == "goodbye") {
        return "Glad we could assist!";
    } else {
        return "Could not find a matching response, ask a different question!"
    }
}