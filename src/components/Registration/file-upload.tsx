import { useDropzone } from "react-dropzone";
import uploadIcon from '../../assets/icon-upload.svg';
import { FILE_UPLOAD } from "../../constants/constants";
import { useTicketContext } from "../../hooks/useTicketContext";

const FileUpload = () => {
    const {avatar, handleAvatar} = useTicketContext();

    const { getRootProps, getInputProps } = useDropzone({
        onDrop: (acceptedFiles) => {
            handleAvatar(URL.createObjectURL(acceptedFiles[0]));
        }
    });
    return(
        <div className="file-upload" {...getRootProps()}>
            <div className="upload-icon"><img src={uploadIcon} /></div>
            <input {... getInputProps()} />
            <p>{FILE_UPLOAD}</p>
            {avatar && <img src={avatar} />}
        </div>
    )
}

export default FileUpload;