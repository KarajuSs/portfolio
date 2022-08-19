import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import Logo from '../../assets/images/logo-K_32x32.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faBook, faHome } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => (
    <div className='nav-bar'>
        <div id='container'>
            <div className='nav-table'>
                <Link className='logo d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none' to='/'>
                    <img src={Logo} alt='logo'/>
                    <span className='subtitle'>Kamil Lewicki</span>
                </Link>
                <nav className='d-none d-lg-table-cell'>
                    <ul>
                        <li>
                            <NavLink exact="true" activeclassname="active" to="/">
                                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
                                <span className="text">Główna</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                                <FontAwesomeIcon icon={faAddressBook} color="#4d4d4e"/>
                                <span className="text">O mnie</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects">
                                <FontAwesomeIcon icon={faAddressBook} color="#4d4d4e"/>
                                <span className="text">Projekty</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
)

export default Navbar