import './style.css';

function Header(props) {
    
    return (
        <header className="header">
            <h1>Notifications</h1>
            <p>{props.totalUnreadMessages}</p>
            <button onClick={props.handleClick} type="button">{props.textMarkAll}</button>
        </header>
    );
}

export default Header;
