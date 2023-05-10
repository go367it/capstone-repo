import { createContext, useState } from "react";

const MessageContext = createContext();

export const MessageProvider = ({children}) =>{

    const [open, setOpen] = useState(false);
    const [type, setType] = useState('info');
    const [message, setMessage] = useState('Message');

    return(
        <MessageContext.Provider value={{open, setOpen, type, setType, message, setMessage}}>
            {children}
        </MessageContext.Provider>
    )
}

export default MessageContext