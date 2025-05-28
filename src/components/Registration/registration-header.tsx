import { REGISTERATION_SUBHEADING, REGISTRATION_HEADING } from '../../constants/constants.ts';

const Header = () => {
    return(
        <header className="heading">
            <h1 className='main-heading'>{REGISTRATION_HEADING}</h1>
            <p className='sub-heading'>{REGISTERATION_SUBHEADING}</p>
        </header>
    );
}

export default Header;