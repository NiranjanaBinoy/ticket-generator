import { useState } from "react"
import { Context, Ticket, TicketInformation } from "../types/types";
import { TicketContext } from "../hooks/useTicketContext";


function getRndInteger(min: number, max: number) {
    return (Math.floor(Math.random() * (max - min + 1) ) + min).toString();
}

const TicketContextProvider = ({ children }: {children: React.ReactNode}) => {
    const [ticketCreated, setTicketCreated] = useState(false);
    const [avatar, setAvatar] = useState<string>('');
    const [ticketInfo, setTicketInfo] = useState<Ticket>({
        avatar: '',
        fullName: '',
        email: '',
        github: '',
        location: '',
        id: '',
        date: 0
    })

    const handleAvatar = (img_url: string) => {
        setAvatar(img_url);
    }

    const handleTicketInfo = (ticketFormdata: TicketInformation) => {
        const id = getRndInteger(10000,99999);
        const ticket = {...ticketFormdata, avatar: avatar, id: id, date: Date.now(),}
        setTicketInfo(ticket);
        setTicketCreated(true);
    }
    const contextValue: Context = {
        ticketCreated,
        ticketInfo,
        avatar,
        handleAvatar,
        handleTicketInfo,
    }

    return <TicketContext.Provider value={contextValue}>{children}</TicketContext.Provider>
}

export default TicketContextProvider;