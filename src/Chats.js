import React from 'react';
import './Chats.css';
import Chat from './Chat';

function Chats() {
    return <div className="chats">
        <Chat
            name = "Dog"
            message="Go go go"
            timestamp= "40 seconds ago"
            profilePic="https://www.cesarsway.com/wp-content/uploads/2019/10/AdobeStock_190562703.jpeg"
        /> 
        <Chat
            name = "Cat"
            message="mew mew mew"
            timestamp= "50 seconds ago"
            profilePic="https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg"
        />   
    </div>;
    
}

export default Chats
