import Logo from '../../assets/images/logo-K_32x32.png'
import Avatar from '../../assets/images/avatar.jpg'
import './index.scss';

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <div className='center hexagon'>
                    <img src={Avatar} alt='Profile'/>
                </div>
                <h1>Hi, <br/> I'm
                <img src={Logo} alt="developer"/>
                amil Lewicki
                <br/>
                web developer
                </h1>
            </div>
        </div>
    );
}

export default Home