import FileUpload from "./FileUpload";
import HintText from "./HintText";

const Form = () => {
    return (
        <form className='form-container'>
            <div className='form-element'>
                {/* refer: https://medium.com/@dprincecoder/creating-a-drag-and-drop-file-upload-component-in-react-a-step-by-step-guide-4d93b6cc21e0 */}
                <label htmlFor='upload-avatar'>Upload Avatar</label>
                <FileUpload />
                <HintText />
                {/* <input type='file' id='upload-avatar' accept="image/*" /> */}
            </div>
            <div className='form-element'>
                <label htmlFor='full-name'>Full Name</label>
                <input type='text' id='full-name' />
            </div>
            <div className='form-element'>
                <label htmlFor='email-address'>Email Address</label>
                <input type='text' id='email-address' />
            </div>
            <div className='form-element'>
                <label htmlFor='github-username'>GitHub Username</label>
                <input type='text' id='github-username' />
            </div>
            <button type='button'>Generate My Ticket</button>
        </form>
    );
};

export default Form;