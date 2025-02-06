// script.js
function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const chatBox = document.getElementById('chat-box');

    const messageText = messageInput.value.trim();

    if (messageText !== "") {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.textContent = messageText;

        chatBox.appendChild(messageElement);

        // Automatski pomakni chat na dno
        chatBox.scrollTop = chatBox.scrollHeight;

        // Očisti input polje
        messageInput.value = "";
    }
}

// Omogućuje slanje poruke kada pritisnemo Enter
document.getElementById('message-input').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
