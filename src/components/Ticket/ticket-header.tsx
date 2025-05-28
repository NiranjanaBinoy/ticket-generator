import { CONGRATS, TICKET_READY } from "../../constants/constants";
import { useTicketContext } from "../../hooks/useTicketContext";
import SubheadingMessage from "./ticket-subheading";

const Header = () => {
    const { ticketInfo } = useTicketContext();
    if(!ticketInfo) return;

    return (
        <header className="heading">
            <h1 className='main-heading'>{CONGRATS} <span className="name-header">{ticketInfo.fullName}</span>! <br/>{TICKET_READY}</h1>
            <SubheadingMessage />
        </header>
    )
}

export default Header;