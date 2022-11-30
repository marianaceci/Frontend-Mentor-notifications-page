import { notifications } from "../Notifications/dataNotifications";
import './style.css';

function Card() {
    return (
        <>
            {notifications.map(notification => (
                <div className="card-container" key={notification.name}>
                    <img src={notification.profileImg} />
                    <div className="card-text">
                        <p><strong>{notification.name}</strong> {notification.action}<b> {notification.object}</b></p>
                        <span>{notification.time}</span>                
                    </div>
                </div>
            ))}
        </>
    )
}

export default Card;

