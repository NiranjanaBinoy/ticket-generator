import { createContext, useContext } from "react";
import { Context } from "../types/types";

export const TicketContext = createContext<Context>({
    ticketCreated: false,
    ticketInfo: undefined,
    avatar: '',
    handleAvatar: () => {},
    handleTicketInfo: () => {},
})

export const useTicketContext = () => {
    return useContext(TicketContext);
}