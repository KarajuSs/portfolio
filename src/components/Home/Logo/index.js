import LogoK from '../../../assets/images/logoK.png'
import './index.scss'

const Logo = () => {
    return (
        <div className='logo-container'>
            <img className='solid-logo' src={LogoK} alt="K"/>
        </div>
    )
}

export default Logo