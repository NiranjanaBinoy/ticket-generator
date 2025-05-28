import infoIcon from '../../assets/icon-info.svg';
import { HINT_TEXT } from '../../constants/constants';

const HintText = () => {
    return (
        <div className='hint-text'>
            <img src={infoIcon} />
            <p>{HINT_TEXT}</p>
        </div>
    )
}

export default HintText;