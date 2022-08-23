import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import Logo from '../../assets/images/logo-K_32x32.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faBars, faBook, faClose, faHome } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={Logo} alt='logo'/>
                <span className='subtitle'>Kamil Lewicki</span>
            </Link>
            <nav className={showNav ? 'mobile-nav' : ''}>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faAddressBook} color="#4d4d4e"/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects">
                    <FontAwesomeIcon icon={faBook} color="#4d4d4e"/>
                </NavLink>
                <FontAwesomeIcon
                    onClick={() => setShowNav(false)}
                    icon={faClose}
                    color="#00f3f3"
                    size="2x"
                    className='close-icon'
                />
            </nav>
            <FontAwesomeIcon
                onClick={() => setShowNav(true)}
                icon={faBars}
                color="#00f3f3"
                size="3x"
                className='hamburger-icon'
            />
        </div>
    )
}

export default Navbar