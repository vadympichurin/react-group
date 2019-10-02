import React from 'react';


const MessageUpdater = ({ changeMessage }) => (
    <button onClick={changeMessage} >change message</button>
);

export default MessageUpdater;