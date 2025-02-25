import { useState } from "react";
import { useDropzone } from "react-dropzone";
import uploadIcon from '../assets/icon-upload.svg';
import { FILE_UPLOAD } from "../constants/constants";

const FileUpload = () => {
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
    const { getRootProps, getInputProps } = useDropzone({
        onDrop: (acceptedFiles) => {
            setUploadedFiles(acceptedFiles);
        }
    });
    console.log(uploadedFiles)
    return(
        <div className="file-upload" {...getRootProps()}>
            <img src={uploadIcon} />
            <input {... getInputProps()} />
            <p>{FILE_UPLOAD}</p>
        </div>
    )
}

export default FileUpload;