import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const [skillLetterClass, setSkillLetterClass] = useState('text-animate')
    const skillBars = document.querySelectorAll('.skill-bar')

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
    }, [])

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['O', ' ', 'm','n','i','e']}
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
                <div className='skill'>
                    <AnimatedLetters
                        letterClass={skillLetterClass}
                        strArray={['H','T','M','L']}
                        idx={12}/>
                    <div className='skill-bar' data-percent='100'>
                        100%
                    </div>
                </div>

                <div className='skill'>
                    <AnimatedLetters
                        letterClass={skillLetterClass}
                        strArray={['C','S','S']}
                        idx={16}/>
                    <div className='skill-bar' data-percent='100'>
                        100%
                    </div>
                </div>

                <div className='skill'>
                    <AnimatedLetters
                        letterClass={skillLetterClass}
                        strArray={['S','A','S','S']}
                        idx={19}/>
                    <div className='skill-bar' data-percent='100'>
                        100%
                    </div>
                </div>

                <div className='skill'>
                    <AnimatedLetters
                        letterClass={skillLetterClass}
                        strArray={['J','S']}
                        idx={23}/>
                    <div className='skill-bar' data-percent='60'>
                        60%
                    </div>
                </div>

                <div className='skill'>
                    <AnimatedLetters
                        letterClass={skillLetterClass}
                        strArray={['J','a','v','a']}
                        idx={25}/>
                    <div className='skill-bar' data-percent='70'>
                        70%
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About