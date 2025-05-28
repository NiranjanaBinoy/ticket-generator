import TicketPattern from '../../assets/pattern-ticket.svg';
import { useTicketContext } from '../../hooks/useTicketContext';
import gitHubIcon from '../../assets/icon-github.svg';
import Logo from '../Logo/logo';
import './ticket.css';

const Ticket = () => {
    const { ticketInfo } = useTicketContext();
    if(!ticketInfo) return null;
    const { date, location, id, avatar, fullName, github } = ticketInfo;
    const dateArr = new Date(date).toDateString().split(' ');
    const dateString = `${dateArr[1]} ${dateArr[2]}, ${dateArr[3]}`;

    return (
        <div className='ticket'>
            <div className="ticket-container">
                <img src={TicketPattern} alt="ticket pattern" className="ticket-pattern"/>                
                    <div className='logo-container'>
                    <Logo classes='ticket-logo-header'/>
                </div>
                <p className='date-location-container'>{dateString} <span className='date-location-separator'>/</span> {location}</p>
                <p className='id-container'>#{id}</p>
                <div>
                    <img src={avatar} alt="ticker holder avatar" className="avatar-image"/>
                    <div className='username'>{fullName}</div>
                    <div className='github-container'>
                        <img src={gitHubIcon} alt="github icon" className="github-icon"/>
                        <p className='github-username'>{github}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ticket;