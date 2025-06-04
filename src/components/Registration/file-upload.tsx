import { useDropzone } from "react-dropzone";
import uploadIcon from '../../assets/icon-upload.svg';
import { FILE_UPLOAD } from "../../constants/constants";
import { useTicketContext } from "../../hooks/useTicketContext";
import HintText from "./hint-text";

const FileUpload = () => {
    const {avatar, handleAvatar} = useTicketContext();

    const maxSize = 500000; // 500KB

    function fileSizeValidator(file: File) {
    if(file.size > maxSize) {
        handleAvatar('');
        return {
            code: "file-too-large",
            message: "File size exceeds 500KB"
        }
    }

    return null
    }
    const { fileRejections, getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/jpeg': ['.jpeg', '.png']
        },
        onDrop: (acceptedFiles) => {
            handleAvatar(URL.createObjectURL(acceptedFiles[0]));
        },
        validator: fileSizeValidator,
        maxFiles: 1,
    });

    const fileRejectionItems = fileRejections.map(({ errors }) => (
        <HintText message={errors[0].message}/>
    ));

    return(
        <div className="file-upload" {...getRootProps()}>
            <div className="upload-icon"><img src={uploadIcon} /></div>
            <input {... getInputProps()} />
            <p>{FILE_UPLOAD}</p>
            {avatar && <img src={avatar} />}
            {fileRejectionItems ? fileRejectionItems : null}
        </div>
    )
}

export default FileUpload;