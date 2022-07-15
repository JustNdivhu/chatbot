// collapsible
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    })
}

function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

function firstBotMessage() {
    let firstMessage = "What's happening?"
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();


// retrieve responses
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class ="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function getResponse () {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText == "Building portfolio!";
    }

    let userHtml = '<p class ="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatBox").append();
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 2500)
}

function buttonSendText(sampleText) {
    let userHtml = '<p class ="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatBox").append();
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function sendButton() {
    getResponse();
}

function heartButton() {
    buttonSendText("heart clicked!")
}

$("#textInput").keypress(function(e) {
    if(e.which == 13) {
        getResponse();
    }
})