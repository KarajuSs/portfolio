import LogoTitle from '../../assets/images/logo-K_200x200.png'
import Avatar from '../../assets/images/avatar.jpg'
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const helloArray = ['z','e','e','e','ś','ć','!']
    const imArray = ['J','e','s','t','e','m']
    const nameArray = ['a','m','i','l',',']
    const jobArray = ['w','e','b',' ', 'd','e','v','e','l', 'o','p','e','r', '.']

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 4500)
    }, [])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <div className='profile'>
                    <div className='hexagon'>
                        <img src={Avatar} alt='Profile'/>
                    </div>
                </div>
                <h1>
                    <span className={letterClass}>C</span>
                    <AnimatedLetters letterClass={letterClass} strArray={helloArray} idx={2}/>
                    <br/>
                    <AnimatedLetters letterClass={letterClass} strArray={imArray} idx={9}/>
                    <img src={LogoTitle} alt="developer"/>
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
                    <br/>
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={27}/>
                </h1>
                <h2>Frontend Dev / JavaScript / Java / GFX Designer</h2>
                <Link to="/about" className='flat-button'>O mnie</Link>
                <Link to="/contact" className='flat-button'>Kontakt</Link>
                <Logo/>
            </div>
        </div>
    );
}

export default Home