const messages = [
    "Are you sure, Nandu?",
    "Really sure, Nandu??",
    "Are you positive, Nandu❤️?",
    "Pookie please, Nandu...",
    "Just think about it, Nandu!",
    "If you say no, I will be really sad, Nandu...❤️",
    "I will be very sad, Nandu...",
    "I will be very very very sad, Nandu...❤️",
    "Ok fine, I will stop asking, Nandu...",
    "Just kidding, say yes please, Nandu! ❤️"
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
