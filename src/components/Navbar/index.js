import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import Logo from '../../assets/images/logo-K_32x32.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faBook, faHome } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={Logo} alt='logo'/>
            <span className='subtitle'>Kamil Lewicki</span>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faAddressBook} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects">
                <FontAwesomeIcon icon={faBook} color="#4d4d4e"/>
            </NavLink>
        </nav>
    </div>
)

export default Navbar