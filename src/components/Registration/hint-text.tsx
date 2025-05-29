import InfoIcon from '../../assets/InfoIcon.tsx';
import { HINT_TEXT } from '../../constants/constants';

const HintText = ({ message }: {message?:string}) => {
    return (
        <div className={`hint-text ${message ? 'errorMessage' : ''}`}>
            <div className={message ? 'error-icon' : 'info-icon'}>
                <InfoIcon className="fill-current" />
            </div>
            <p>{message ? message : HINT_TEXT}</p>
        </div>
    )
}

export default HintText;