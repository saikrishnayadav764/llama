import React, { useState } from "react";

function General() {
  const [chatbotName, setChatbotName] = useState("My Chatbot");
  const [welcomeMessage, setWelcomeMessage] = useState("Welcome to our service!");
  const [inputPlaceholder, setInputPlaceholder] = useState("Type your message here...");

  const handleChatbotNameChange = (event) => {
    setChatbotName(event.target.value);
  };

  const handleWelcomeMessageChange = (event) => {
    setWelcomeMessage(event.target.value);
  };

  const handleInputPlaceholderChange = (event) => {
    setInputPlaceholder(event.target.value);
  };

  return (
    <div>
      <div className="general-inputs">
        <label className="general-label">Chatbot Name</label>
        <input
          type="text"
          value={chatbotName}
          onChange={handleChatbotNameChange}
        />
        <p>Lorem ipsum dolor sit Lorem ipsum dolor sit</p>
      </div>

      <div className="general-inputs">
        <label className="general-label">Welcome Message</label>
        <input
          type="text"
          value={welcomeMessage}
          onChange={handleWelcomeMessageChange}
        />
        <p>Lorem ipsum dolor sit Lorem ipsum dolor sit</p>
      </div>

      <div className="general-inputs">
        <label className="general-label">Input Placeholder</label>
        <input
          type="text"
          value={inputPlaceholder}
          onChange={handleInputPlaceholderChange}
        />
        <p>Lorem ipsum dolor sit Lorem ipsum dolor sit</p>
      </div>
    </div>
  );
}

export default General;
