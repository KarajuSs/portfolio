import { Outlet } from 'react-router-dom';
import Wave from '../Wave';
import Navbar from '../Navbar';
import './index.scss';
import Footer from '../Footer';

const Layout = () => {
    return (
        <div className='App'>
            <Navbar/>
            <Wave/>
            <div className='page'>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
}

export default Layout