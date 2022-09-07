import AnimatedLetters from '../AnimatedLetters';
import Profile from '../../assets/images/avatar.jpg';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Loader from 'react-loaders';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover');
        }, 3000)
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_hkbmtrr', 'template_59ogh5r', refForm.current, 'GLOO-PyEsHpdSBsjJ')
          .then((result) => {
                alert('Wiadomość została wysłana!');
                window.location.reload(false);
          }, (error) => {
                alert('Wystąpił błąd podczas przesyłania wiadomości, spróbuj ponownie');
          });
    };

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={'Kontakt'.split('')}
                            idx={1}
                        />
                    </h1>
                    <p>
                        Jeśli znajdą się jakieś pytania bądź niejasności prosiłbym niżej o kontakt!
                        Nie wahaj się ze mną skontaktować za pomocą poniższego formularza 😏
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='user_name' placeholder='Nazwa' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='user_email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input type='text' name='subject' placeholder='Tytuł' required />
                                </li>
                                <li>
                                    <textarea name='message' placeholder='Wiadomość' required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='Wyślij' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='card-info'>
                    <div className='square'></div>
                    <div className='square'></div>
                    <div className='square'></div>
                    <div className='square'></div>
                    <div className='square'></div>
                    <div className='inner'>
                        <div className='profile'>
                            <img src={Profile} alt='logo'/>
                            <h2>
                                <AnimatedLetters
                                    letterClass={letterClass}
                                    strArray={'Kamil Lewicki'.split('')}
                                    idx={8}
                                />
                            </h2>
                            <p>Frontend developer</p>
                        </div>
                        <div className='socials'>
                            <a href="https://www.linkedin.com/in/kamil-lewicki-b7976524b/" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                            </a>
                            <a href="https://github.com/KarajuSs/" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                            </a>
                            <a href="https://www.facebook.com/K.Lewickix/" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faFacebook} color="#4d4d4e"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="square-spin" />
        </>
    )
}

export default Contact