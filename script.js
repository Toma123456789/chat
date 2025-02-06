
    const messageText = messageInput.value.trim();

    if (messageText !== "") {
        // Kreiraj novu poruku
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'sent');
        messageElement.textContent = messageText;

        // Dodaj poruku u chat box
        chatBox.appendChild(messageElement);

        // Spremi poruku u localStorage
        saveMessage(messageText);

        // Pomakni chat na dno
        chatBox.scrollTop = chatBox.scrollHeight;

        // Očisti input polje
        messageInput.value = "";
    }
}

function saveMessage(messageText) {
    let messages = JSON.parse(localStorage.getItem("messages")) || [];
    messages.push(messageText);
    localStorage.setItem("messages", JSON.stringify(messages));
}

function loadMessages() {
    const messages = JSON.parse(localStorage.getItem("messages")) || [];

    const chatBox = document.getElementById('chat-box');
    messages.forEach(messageText => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.textContent = messageText;
        chatBox.appendChild(messageElement);
    });

    // Pomakni chat na dno
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Omogućava slanje poruke kad korisnik pritisne Enter
document.getElementById('message-input').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});


