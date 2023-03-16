const chatLog = document.querySelector('.chat-log');
const userInput = document.querySelector('#user-input');
const sendBtn = document.querySelector('#send-btn');

const botResponses = {
    'hello': /hello|hi|hey/i,
    'how are you': /how are you|how are things/i,
    'help': /help|support|problem|issue/i
};

const badWords = ['motyla noga', 'cholera', 'kurczę', 'głupek'];

function addBotMessage(message, isError = false) {
    const botMessage = document.createElement('div');
    botMessage.classList.add('message-bot', 'message');
    if (isError) {
        botMessage.classList.add('error');
    }
    botMessage.innerText = message;
    chatLog.appendChild(botMessage);
}

function sendUserMessage() {
    const userMessage = userInput.value;
    if (userMessage) {
        userInput.value = '';
        const userMessageElement = document.createElement('div');
        const hasBadWords = badWords.some(word => userMessage.toLowerCase().includes(word.toLowerCase()));

        userMessageElement.innerText = userMessage;
        userMessageElement.classList.add('message-user', 'message');
        chatLog.appendChild(userMessageElement);

        if (hasBadWords) {
            addBotMessage('Proszę, nie używaj takich słów', true);
            alert('Wykryto wulgaryzmy w Twojej wiadomości. Proszę, nie używaj takich słów.');
        } else {
            setTimeout(() => {
                let responseFound = false;
                for (const [key, value] of Object.entries(botResponses)) {
                    if (value.test(userMessage)) {
                        addBotMessage(key);
                        responseFound = true;
                        break;
                    }
                }
                if (/^\/version$/i.test(userMessage)) {
                    addBotMessage('Wersja oprogramowania: v1.2.3');
                    responseFound = true;
                }

                const pogodaRegex = /^\/pogoda\s+(\w+)$/i;
                const pogodaMatch = userMessage.match(pogodaRegex);
                if (pogodaMatch) {
                    const miasto = pogodaMatch[1];
                    const temperatura = Math.floor(Math.random() * 41) - 20;
                    addBotMessage(`W ${miasto} jest ${temperatura} stopni`);
                    responseFound = true;
                }
                if (!responseFound) {
                    addBotMessage('Wrong message');
                }

                chatLog.scrollTop = chatLog.scrollHeight;
            }, 1000);
        }
    }
    chatLog.scrollTop = chatLog.scrollHeight;
}

sendBtn.addEventListener('click', sendUserMessage);
userInput.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
        sendUserMessage();
    }
});
