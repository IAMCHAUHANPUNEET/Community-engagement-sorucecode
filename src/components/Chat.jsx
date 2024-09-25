import { useState } from "react";
const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const getBotResponse = (userMessage) => {
    const lowerCaseMessage = userMessage.toLowerCase();
    if (lowerCaseMessage.includes("hello")) {
      return "Hi there! How can I help you today?";
    } else if (lowerCaseMessage.includes("how are you")) {
      return "I am just a bot, but I am functioning as expected!";
    } else if (lowerCaseMessage.includes("your name")) {
      return "Sir I am Jarvis";
    } else if (lowerCaseMessage.includes("Can you assis me")) {
      return "Sorry My Developer is working on it";
    } else if (lowerCaseMessage.includes("What can you do for me")) {
      return "I can perform basic functionalities of chatting";
    } else {
      return "I am sorry, I do not understand your request.";
    }
  };

  const handleSend = () => {
    if (input.trim() === "") return;

    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);

    const botMessage = { sender: "bot", text: getBotResponse(input) };

    setMessages([...messages, userMessage, botMessage]);
    setInput("");
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-box">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
