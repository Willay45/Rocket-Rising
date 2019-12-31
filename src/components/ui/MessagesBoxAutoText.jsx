import React, {useState} from "react";
import './MessagesBox.css';
import MessagesBox from "./MessagesBox";

const MessagesBoxAutoText = ({messages, endMessagesAction}) => {

    const [iMessage, setIMessage] = useState(0);
    const messagesToDisplay = messages && messages.length ? messages : [];

    const nextMessage = () => {
        if (iMessage === messages.length -1){
            endMessagesAction();
            return
        }
        setIMessage(iMessage +1)
    };


    return(
        <div className="MessagesBoxAutoText">
            <MessagesBox>
                { messagesToDisplay[iMessage] || '' }
                <button className="nextMessage" style={{ display: messagesToDisplay[iMessage] ? 'initial' : 'none' }} onClick={nextMessage}>Next</button>
            </MessagesBox>
        </div>
    )
};

export default MessagesBoxAutoText;