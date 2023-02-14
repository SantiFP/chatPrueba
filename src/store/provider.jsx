import ChatContext from "./chat-context";
import { useState } from "react";

const ChatProvider = (props) => {
  const [name, setName] = useState("");

  const enteredNameHandler = (name) => {
    setName(name);
  };

  const chatContext = {
    name,
    enteredNameHandler,
  };

  return (
    <ChatContext.Provider value={chatContext}>
      {props.children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
