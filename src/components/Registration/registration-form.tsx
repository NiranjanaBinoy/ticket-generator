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
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const {city, region} = useGeoLocation();
    const address = `${city}, ${region}`;

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.fullName.trim()) {
            newErrors.fullName = "Full name is required.";
        }
        if( !formData.email.trim()) {
            newErrors.email = "Email address is required.";
        } else if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            newErrors.email = "The email address is invalid.";
        }
        if (!formData.github.trim()) {
            newErrors.github = "GitHub username is required.";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({...prevData, [name]: value}));
        setErrors((prev) => ({...prev, [name]: ""}));
    }

    const createTicket = () => {
        if (!validate()) return;
        handleTicketInfo({...formData, location: address});
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
                {errors.fullName && <HintText message={errors.fullName} />}
            </div>
            <div className='form-element'>
                <label htmlFor='email'>Email Address</label>
                <input type='email' name='email' onChange={handleChange} placeholder="example@email.com" required/>
                {errors.email && <HintText message={errors.email} />}
            </div>
            <div className='form-element'>
                <label htmlFor='github'>GitHub Username</label>
                <input type='text' name='github' onChange={handleChange} placeholder="@yourusername" required/>
                {errors.github && <HintText message={errors.github} />}
            </div>
            <button type='button' onClick={createTicket}>Generate My Ticket</button>
        </form>
    );
};

export default Form;