// Select elements
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const sendButton = document.getElementById('send-button');
const newChatButton = document.getElementById('new-chat');

// Add event listener to the send button
sendButton.addEventListener('click', () => {
    const userMessage = chatInput.value.trim();
    if (userMessage) {
        addMessageToChat('You', userMessage);
        chatInput.value = '';
        // Placeholder for AI response logic
        addMessageToChat('AI', 'This is a placeholder response.');

        // Show the sidebar if it's hidden
        const sidebar = document.getElementById('sidebar');
        if (sidebar.classList.contains('hidden')) {
            sidebar.classList.remove('hidden');
            sidebar.classList.add('visible');
        }
    }
});

// Add event listener to the new chat button
newChatButton.addEventListener('click', () => {
    // Clear chat messages
    chatMessages.innerHTML = '';

    // Hide the sidebar
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('visible');
    sidebar.classList.add('hidden');

    // Optionally, add a new entry to the chat history
    const chatHistoryItem = document.createElement('li');
    chatHistoryItem.textContent = `Chat started at ${new Date().toLocaleTimeString()}`;
    document.getElementById('history-list').appendChild(chatHistoryItem);
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