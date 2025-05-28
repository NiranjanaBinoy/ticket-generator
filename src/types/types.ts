export type Context = {
    ticketCreated: boolean,
    ticketInfo?: Ticket,
    avatar: string,
    handleAvatar: (img_url: string) => void,
    handleTicketInfo: (ticketFormdata: TicketInformation) => void,
}

export type TicketInformation = {
    avatar?: string,
    fullName: string,
    email: string,
    github: string,
    location: string,
}

export type Ticket = {
    id: string,
    date: number,
} & TicketInformation;
