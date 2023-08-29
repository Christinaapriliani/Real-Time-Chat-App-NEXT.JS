import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import MessageForm from './MessageForm';

const socket = io.connect('http://localhost:3000');

const ChatWindow = () => {
    const [messages, setMessages] = useState([]);
    
    useEffect(() => {
        socket.on('message', message => {
            setMessages([...messages, message]);
        });
    }, [messages]);

    const sendMessage = text => {
        const message = { text, timestamp: new Date().getTime() };
        socket.emit('message', message);
        setMessages([...messages, message]);
    };

    return (
        <div>
            <div className="chat-window">
                {messages.map((message, index) => (
                    <div key={index} className="message">
                        <span>{new Date(message.timestamp).toLocaleTimeString()}</span>
                        <p>{message.text}</p>
                    </div>
                ))}
            </div>
            <MessageForm sendMessage={sendMessage} />
        </div>
    );
};

export default ChatWindow;
