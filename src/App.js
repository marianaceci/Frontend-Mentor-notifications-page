import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';

function App() {

    const [countUnreadMessages, setCountUnreadMessages] = useState(0);
    const handleClickUnreadMessage = event => {
        event.currentTarget.classList.toggle('isUnread');
        if (event.currentTarget.classList.value.includes('isUnread')) {
            setCountUnreadMessages(prevCountUnreadMessages => prevCountUnreadMessages + 1)            
        } else {
            setCountUnreadMessages(prevCountUnreadMessages => prevCountUnreadMessages - 1)
        }
    };

    const allUnread = () => {
        if (markAllUnreadMessages == "card-container isUnread") {
            setCountUnreadMessages(prevCountUnreadMessages => prevCountUnreadMessages = 0);            
        } else {
            setCountUnreadMessages(prevCountUnreadMessages => prevCountUnreadMessages = 7);
        }
    }


    const [markAllUnreadMessages, setMarkAllUnreadMessages] = useState("card-container");
    const unreadAllMessages = () => {
        setMarkAllUnreadMessages(prevmarkAllUnreadMessages => prevmarkAllUnreadMessages == "card-container" ? prevmarkAllUnreadMessages = "card-container isUnread" : "card-container");
    }    

    const [markAllUnread, setMarkAllUnread] = useState("Mark all as unread");
    const handleClickMarkAll = () => {
        setMarkAllUnread(prevMarkAllUnread => prevMarkAllUnread == "Mark all as unread" ? prevMarkAllUnread = "Mark all as read" : "Mark all as unread");
        unreadAllMessages();
        allUnread();
    }

    return (
        <section className="flex-container">
            <Header
                totalUnreadMessages={countUnreadMessages}
                handleClick={handleClickMarkAll}
                textMarkAll={markAllUnread}
            />
            <Card
                markUnreadMessage={handleClickUnreadMessage}
                className={markAllUnreadMessages}
            />
             
        </section>
    );
}

export default App;

