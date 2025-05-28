import { getTicketSendMessage } from '../../constants/constants';
import { useTicketContext } from '../../hooks/useTicketContext';

const SubheadingMessage = () => {
    const{ ticketInfo } = useTicketContext();
    if(!ticketInfo) return null;
    
    
    const message = getTicketSendMessage(ticketInfo.email);

    return (
        <div className='ticket-subheading' dangerouslySetInnerHTML={{ __html: message }} />
    );
};

export default SubheadingMessage;