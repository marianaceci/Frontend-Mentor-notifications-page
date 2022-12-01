import { notifications } from "../Notifications/dataNotifications";
import './style.css';

function Card(props) {

    return (
        <>
            {notifications.map(notification => (
                <div
                    className={`${props.className}`}
                    key={notification.name}
                    onClick={props.markUnreadMessage}
                >
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

