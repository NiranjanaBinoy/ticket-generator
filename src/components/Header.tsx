import { HEADING, SUBHEADING } from '../constants/constants.ts';

const Header = () => {
    return(
        <header className="heading">
            <h1>{HEADING}</h1>
            <p>{SUBHEADING}</p>
        </header>
    );
}

export default Header;