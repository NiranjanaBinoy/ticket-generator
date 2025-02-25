import logo from '../assets/logo-mark.svg';
import { LOGO_DESC } from '../constants/constants.ts';

const Logo = () => {
    return (
        <div className="logo-header">
            <img src={logo} alt="Logo" />
            <p className="heading-name">{LOGO_DESC}</p>
        </div>
    )
}

export default Logo;