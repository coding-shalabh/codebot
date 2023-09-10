import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';

const apikey = `Bearer ${process.env.REACT_APP_OPEN_AI}`;


const Chat = () => {
  const messages = [{ id: 0, sender: 'bot', content: "How can I help you today ?", timestamp: new Date().toISOString() }]; // State to track loading status
  const [userInput, setUserInput] = useState('');
  const [conversation, setConversation] = useState(messages);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    
    if (userInput.trim() === '') return;

    setConversation(prevConversation => [
      ...prevConversation,
      { id: conversation.length + 1, sender: 'current_user', content: userInput, timestamp: new Date().toISOString() },
    ]);



    // Make API call to OpenAI for generating a response

    const payload = {
      prompt: `You are now chatting with Coding Bot, created by Shalabh Gupta.

Coding Bot is here to assist you with coding questions and provide code fixes. It specializes in JavaScript, Python, and Java.

Instructions:
1. Ask coding-related questions or provide code snippets.
2. Coding Bot will analyze your input and provide relevant code fixes or explanations.
3. Feel free to ask follow-up questions for clarification or additional assistance.
4. If you have a specific code snippet to fix, paste it here, and Coding Bot will help you with the corrections.
5. Keep the conversation focused on coding-related topics.

You can start by asking your coding question or providing a code snippet for Coding Bot to assist you.` 
      
      + userInput,
      max_tokens: 750,
      temperature: 0.5,
      top_p: 0.8,
    };
    
    try {
      console.log(apikey);
      const response = await fetch('https://api.openai.com/v1/engines/text-davinci-002/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + process.env.REACT_APP_OPEN_AI,
        },
        body: JSON.stringify(payload), // Send user's message to OpenAI API
      });

      if (response.status === 200) {
        const responseData = await response.json();
        const botResponse = responseData.choices[0].text; 
        setConversation(prevConversation => [
          ...prevConversation,
          { id: conversation.length + 2, sender: 'bot', content: botResponse, timestamp: new Date().toISOString() },
        ]);
        setUserInput('');
      } else {
        console.error('Failed to get response from OpenAI API');
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleMessageChange = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div>
        <>
          <Navbar />
          <div>
            <section className="message-area">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="chatbox showbox">
                      <div className="modal-dialog-scrollable">
                        <div className="modal-content">
                          <div className="modal-body">
                            <div className="msg-body">
                              <ul className='mainchatBody'>
                                {conversation.map((message) => (
                                  <li key={message.id} className={message.sender === 'current_user' ? 'sender' : 'receiver'}>
                                    
                                    <p>{message.content}</p>
                                    <span className="time">{message.timestamp}</span>
                                  </li>
                                ))}
                              </ul>

                            </div>
                          </div>

                          <div className="send-box">
                            <form action="">
                              <textarea
                                rows={6}
                                cols={40}
                                className="form-control"
                                aria-label="message…"
                                placeholder="Write message…"
                                onChange={handleMessageChange}
                                value={userInput}
                              />
                              <button type="button" onClick={handleSendMessage} className='sendButton'> Send
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                        <p>The <b>Codebot</b> is created just for trial purpose, its under training. It may provide inccurate information.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </>
    </div>
  );
};

export default Chat;

