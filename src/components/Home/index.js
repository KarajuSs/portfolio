import LogoTitle from '../../assets/images/logo-K_200x200.png'
import Avatar from '../../assets/images/avatar.jpg'
import './index.scss';
import { Row, Col } from 'react-bootstrap';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a','m','i','l',' ', 'L','e','w','i','c','k','i']
    const jobArray = ['w','e','b',' ', 'd','e','v','e','l', 'o','p','e','r', '.']

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 4500)
    }, [])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <Row>
                    <Col>
                        <div className='hexagon'>
                            <img src={Avatar} alt='Profile'/>
                        </div>
                    </Col>
                    <Col>
                        <h1>
                            <span className={letterClass}>H</span>
                            <span className={`${letterClass} _12`}>i,</span>
                            <br/>
                            <span className={`${letterClass} _13`}>I</span>
                            <span className={`${letterClass} _14`}>'m</span>
                            <img src={LogoTitle} alt="developer"/>
                            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
                            <br/>
                            <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={27}/>
                        </h1>
                        <h2>Frontend Dev / JavaScript / Java / GFX Designer</h2>
                        <Link to="/about" className='flat-button'>About me!</Link>
                        <Link to="/contact" className='flat-button'>Contact me!</Link>
                    </Col>
                    <Logo/>
                </Row>
            </div>
        </div>
    );
}

export default Home