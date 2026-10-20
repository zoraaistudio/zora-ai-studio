// Cloudflare Worker ka live URL
const BACKEND_URL = "https://quiet-cake-3740.anantmi444shra.workers.dev"; 

function appendMessage(sender, text) {
    const chatBox = document.getElementById('chatBox');
    const div = document.createElement('div');
    div.className = `message ${sender}`;
    div.innerText = text;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

document.getElementById('sendBtn').addEventListener('click', async () => {
    const input = document.getElementById('userInput');
    const message = input.value.trim();
    if (!message) return;

    appendMessage('user', message);
    input.value = '';

    const typingMsg = document.createElement('div');
    typingMsg.className = 'message ai';
    typingMsg.innerText = "Zora is typing...";
    document.getElementById('chatBox').appendChild(typingMsg);

    try {
        const res = await fetch(`${BACKEND_URL}/api/chat`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message })
        });
        
        const data = await res.json();
        typingMsg.remove();

        if (res.ok) {
            appendMessage('ai', data.reply);
        } else {
            appendMessage('ai', "❌ " + data.error);
        }
    } catch (error) {
        typingMsg.remove();
        appendMessage('ai', "❌ Error connecting to server.");
    }
});

document.getElementById('userInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        document.getElementById('sendBtn').click();
    }
});
          
