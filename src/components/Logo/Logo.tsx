import logo from '../../assets/logo-mark.svg';
import { LOGO_DESC } from '../../constants/constants.ts';

const Logo = ( { classes }: { classes: string} ) => {
    return (
        <div className={classes}>
            <img src={logo} alt="Logo" />
            <p className="logo-heading-name">{LOGO_DESC}</p>
        </div>
    )
}

export default Logo;