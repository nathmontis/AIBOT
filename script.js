// Select elements
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const sendButton = document.getElementById('send-button');

// Add event listener to the send button
sendButton.addEventListener('click', () => {
    const userMessage = chatInput.value.trim();
    if (userMessage) {
        addMessageToChat('You', userMessage);
        chatInput.value = '';
        // Placeholder for AI response logic
        addMessageToChat('AI', 'This is a placeholder response.');
    }
});

// Updated addMessageToChat function to differentiate user and AI messages
function addMessageToChat(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message');
    if (sender === 'You') {
        messageElement.classList.add('user');
    } else {
        messageElement.classList.add('ai');
    }
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}