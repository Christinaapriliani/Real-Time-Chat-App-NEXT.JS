import React, { useState } from 'react';

const MessageForm = ({ sendMessage }) => {
    const [text, setText] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (text.trim()) {
            sendMessage(text);
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Type your message..."
            />
            <button type="submit">Send</button>
        </form>
    );
};

export default MessageForm;
