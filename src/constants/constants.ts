export const LOGO_DESC = 'Coding Conf';
export const REGISTRATION_HEADING = 'Your Journey to Coding Conf 2025 Starts Here!';
export const REGISTERATION_SUBHEADING = 'Secure your spot at next year’s biggest coding conference.';
export const FILE_UPLOAD = 'Drag and drop or click to upload';
export const HINT_TEXT = 'Upload your photo (JPG or PNG, max size: 500KB).';
export const CONGRATS = 'Congrats, ';
export const TICKET_READY = 'Your ticket is ready.';
export const getTicketSendMessage = (email: string): string => {
    return `We've emailed your ticket to <span class="name-header">${email}</span> and will send updates in the run up to the event.`;
};