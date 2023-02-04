import React from 'react';

const ChatContext = React.createContext({
    name: '',
    enteredNameHandler: () => {}
});

export default ChatContext;