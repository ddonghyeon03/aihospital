document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    const appendMessage = (message, sender) => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);
        messageElement.innerText = message;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    };

    const analyzeSymptoms = (symptoms) => {
        // 간단한 분석 로직 (사용자 정의 대답 추가)
        if (symptoms.includes('기침') && symptoms.includes('열')) {
            return '감기 또는 독감일 수 있습니다.';
        } else if (symptoms.includes('두통') && symptoms.includes('메스꺼움')) {
            return '편두통일 수 있습니다.';
        } else if (symptoms.includes('복통') && symptoms.includes('설사')) {
            return '장염일 수 있습니다.';
        } else if (symptoms.includes('피로') && symptoms.includes('식욕 부진')) {
            return '스트레스나 영양 부족일 수 있습니다.';
        } else {
            return '정확한 진단을 위해 의사와 상담하세요.';
        }
    };

    sendButton.addEventListener('click', () => {
        const userText = userInput.value.trim();
        if (userText !== '') {
            appendMessage(userText, 'user');
            const botResponse = analyzeSymptoms(userText);
            appendMessage(botResponse, 'bot');
            userInput.value = '';
        }
    });

    userInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendButton.click();
        }
    });
});
