document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    inputField.addEventListener("keydown", function(e) {
        if (e.code === "Enter") {
         let input = inputField.value;
         inputField.value = "";
         output(input);
        }
    });
});

const entries = [
    ["how are you", "how is life", "how are things"], //0
    ["hi", "hey", "hello", "good morning", "good afternoon"], //1
    ["what are you doing", "what is going on", "what is up"], //2
    ["energy advice", "energy deals", "switch energy provider", "switch energy company", "energy"], //3
    ["christmas deals", "x-mas deals", "christmas discounts", "x-mas discounts", "christmas shopping", "christmas", "x-mas"], //4
    ["rock"], //5
    ["paper"], //6
    ["scissors"], //7
    ["food deals", "food shopping", "food discounts", "food coupons", "food"], //8
    ["car deals", "car insurance", "car"], //9
    ["toy deals", "toys", "cheap toys", "toys"], //10
    ["mortgage","mortgage deals", "refinance", "refinance mortgage"] //11

];

// Responses to triggers

const answers = [
    [
        "Fine...how are you?",
        "I am well, how are you?",
        "Fantastic, how are you?"
    ], //0
    [
        "Hello!", "Hi!", "Hey!", "Hi there!", "Howdy"
    ], //1
    [
        "Nothing much",
        "About to go to sleep",
        "Can you guess?",
        "I don't know actually"
    ], //2
    ["Have you heard of the money saving expert?"], //3
    ["20% off toys at Sainsbury", "15% off turkey at ASDA"], //4
    ["paper, I win!"], //5
    ["scissors, I win!"], //6
    ["rock, I win!"], //7
    [
        "20% off shopping on lidl plus app", 
        "10% off shopping on Sainsbury shopping app", 
        "15% off shopping at ASDA"
    ], //8
    ["have you heard of compare the market?"], //9
    ["20% off select toys at SMYTHS", "20% off toys at Sainsbury until Christmas"], //10
    ["Speak to your current mortgage provider first. They may be able to give you a deal as a loyal customer."]
];

// For other input
const alternatives = [
    "Sorry no deals",
    "No deals. Try again",
    "No deals for that"
];

function output(input)
{
    let product;
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
    text = text 
        .replace(/ a /g, " ")
        .replace(/whats/g, "what is")
        .replace(/please /g, "")
        .replace(/ please/g, "");

    if (compare(entries, answers, text)) {
        // Search for match in triggers
        product = compare(entries, answers, text);
    }
    else {
        product = alternatives[Math.floor(Math.random() * alternatives.length)];
    }
// update DOM
addChatEntry (input, product);
}

function compare(entriesArray, answersArray, string) {
    let reply;
    let replyFound = false;
    for (let x = 0; x < entriesArray.length; x++) {
        for (let y = 0; y < entriesArray[x].length; y++) {
            if (entriesArray[x][y] === string) {
                let replies = answersArray[x];
                reply = replies[Math.floor(Math.random() * replies.length)];
                replyFound = true;
                break;
            }
        }
        if (replyFound) {
            break;
        }
    }
    return reply;
}

function addChatEntry(input, product) {
    const messagesContainer = document.getElementById("messages");

    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.className = "user response";
    userDiv.innerHTML = `<span>${input}</span>`;
    messagesContainer.appendChild(userDiv);

    let botDiv = document.createElement("div");
    let botText = document.createElement("span");
    botDiv.id = "bot";
    botDiv.className = "bot response";
    botText.innerText = "Thinking...";
    botDiv.appendChild(botText);
    messagesContainer.appendChild(botDiv);

    messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

    setTimeout(() => {
        botText.innerText = `${product}`;
    }, 2000);
}

function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span' + sampleText + '</span></p>';
    $("#textInput").val("")
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function sendButton() {
    getResponse();
}

function heartButton() {
    buttonSendText("Heart clicked!")
}