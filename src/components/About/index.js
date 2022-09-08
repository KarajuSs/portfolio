import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import SkillPercent from '../SkillPercent';
import Loader from 'react-loaders';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [skillLetterClass, setSkillLetterClass] = useState('text-animate');
    const skillBars = document.querySelectorAll('.skill-bar');

    for (let skillBar of skillBars) {
        skillBar.style.width = skillBar.getAttribute('data-percent') + '%';
    }

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)

        setTimeout(() => {
            return setSkillLetterClass('text-animate-hover')
        }, 4700)
    }, []);

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={'O mnie'.split('')}
                            idx={1}/>
                    </h1>
                    <p>
                        Młody duchowo, mający wiele ambicji do rozwinięcia się w roli front-end developera czy nawet jako back-end. Szukam wyzwań technologicznych
                        dzięki, którym będę jeszcze lepszy w tym co aktualnie robię, inaczej chcę zamienić swoje hobby w pracę 💪😎
                    </p>
                    <p>
                        Z charakteru w nieznanym środowisku jestem cichy, lecz pewny siebie, gdy już się zaznajomię z nowym otoczeniem wręcz tryskam energią 😂,
                        staram się wciąż rozwijać umiejętnościowo jak i jestem bardzo ciekawski różnych kwestii 😏😶‍🌫️
                    </p>
                </div>

                <div className='skills-cont'>
                    <SkillPercent clazz={skillLetterClass} array={['H','T','M','L']} percent={'100'} idx={12}/>
                    <SkillPercent clazz={skillLetterClass} array={['C','S','S']} percent={'100'} idx={16}/>
                    <SkillPercent clazz={skillLetterClass} array={['S','A','S','S']} percent={'80'} idx={19}/>
                    <SkillPercent clazz={skillLetterClass} array={['J','S']} percent={'60'} idx={23}/>
                    <SkillPercent clazz={skillLetterClass} array={['J','a','v','a']} percent={'70'} idx={25}/>
                    <SkillPercent clazz={skillLetterClass} array={['S','Q','L']} percent={'70'} idx={29}/>
                    <SkillPercent clazz={skillLetterClass} array={['P','H','P']} percent={'50'} idx={32}/>
                </div>
            </div>
            <Loader type="square-spin" />
        </>
    )
}

export default About