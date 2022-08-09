import { Link } from 'react-router-dom';
import './index.scss';
import Logo from '../../assets/images/logo-K_32x32.png'

const Navbar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={Logo} alt='logo'/>
            <span className='subtitle'>Kamil Lewicki</span>
        </Link>
    </div>
)

export default Navbar