const messages = [
    "Are you sure?",
    "???",
    "STILL NEGATIVE????",
    "BRO?? ARE U FR?",
    "JUST PRESS THE YES",
    "JS OMG ATP",
    "If you say no, I will be really sad...",
    "not js sad imma kms",
    "ya im doing kurt cobain treatment...",
    "fuck off pls yes...",
    "YES PLS ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}