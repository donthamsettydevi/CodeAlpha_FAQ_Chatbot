const faqs = [
    {
        keywords: ["ai", "artificial intelligence"],
        answer: "Artificial Intelligence (AI) is the simulation of human intelligence by machines."
    },
    {
        keywords: ["machine learning", "ml"],
        answer: "Machine Learning is a subset of AI that enables systems to learn from data."
    },
    {
        keywords: ["deep learning"],
        answer: "Deep Learning uses neural networks with many layers to solve complex problems."
    },
    {
        keywords: ["nlp", "natural language processing"],
        answer: "NLP helps computers understand human language."
    },
    {
        keywords: ["chatgpt", "developer of chatgpt", "who developed chatgpt"],
        answer: "ChatGPT was developed by OpenAI."
    }
];

function getAnswer() {
    const input = document.getElementById("userInput");
    const userText = input.value.trim().toLowerCase();

    if (!userText) return;

    addMessage(userText, "user");

    let answer = "Sorry, I couldn't find an answer to that question.";

    for (const faq of faqs) {
        if (faq.keywords.some(keyword => userText.includes(keyword))) {
            answer = faq.answer;
            break;
        }
    }

    setTimeout(() => {
        addMessage(answer, "bot");
    }, 500);

    input.value = "";
}

function addMessage(text, sender) {
    const chatbox = document.getElementById("chatbox");

    const msg = document.createElement("div");
    msg.className = sender === "user"
        ? "user-message"
        : "bot-message";

    msg.textContent = text;

    chatbox.appendChild(msg);
    chatbox.scrollTop = chatbox.scrollHeight;
}

document.getElementById("userInput").addEventListener("keypress", e => {
    if (e.key === "Enter") getAnswer();
});