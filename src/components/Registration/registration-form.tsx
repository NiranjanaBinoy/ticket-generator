import { useState,  ChangeEvent } from "react";
import FileUpload from "./file-upload";
import HintText from "./hint-text";
import useGeoLocation from "../../hooks/useGeoLocation";
import { TicketInformation } from "../../types/types";
import { useTicketContext } from "../../hooks/useTicketContext";

const Form = () => {
    const { handleTicketInfo } = useTicketContext();
    const [formData, setFormData] = useState<TicketInformation>({
        fullName: '',
        email: '',
        github: '',
        location: '',
    });
    const {city, region} = useGeoLocation();
    const address = `${city}, ${region}`;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({...prevData, [name]: value}))
    }

    const createTicket = () => {
        handleTicketInfo({...formData, location: address})
    }

    return (
        <form className='form-container'>
            <div className='form-element'>
                <label htmlFor='avatar'>Upload Avatar</label>
                <FileUpload />
                <HintText />
            </div>
            <div className='form-element'>
                <label htmlFor='fullName'>Full Name</label>
                <input type='text' name='fullName' onChange={handleChange} required/>
            </div>
            <div className='form-element'>
                <label htmlFor='email'>Email Address</label>
                <input type='email' name='email' onChange={handleChange} placeholder="example@email.com" required/>
            </div>
            <div className='form-element'>
                <label htmlFor='github'>GitHub Username</label>
                <input type='text' name='github' onChange={handleChange} placeholder="@yourusername" required/>
            </div>
            <button type='button' onClick={createTicket}>Generate My Ticket</button>
        </form>
    );
};

export default Form;