import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import projectsData from '../../data/projects.json'

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    console.log(projectsData);

    useEffect(() => {
        const timer = setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 2000);

        return () => {
            clearTimeout(timer);
        }
    });

    const renderProjects = (projects) => {
        return (
            <div className='images-cont'>
                {
                    projects.map((port, idx) => {
                        return (
                            <div className='image-box' key={idx}>
                                <img src={port.cover} className='project-image' alt="project" />
                                <div className='content'>
                                    <p className='title'>{port.title}</p>
                                    <h4 className='description'>{port.description}</h4>
                                    <button className='btn' onClick={() => window.open(port.url)}>Sprawdź!</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }

    return (
        <div className='container projects-page'>
            <h1 className='title'>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={'Projekty'.split('')}
                    idx={1}/>
            </h1>

            <div>{renderProjects(projectsData.projects)}</div>
        </div>
    );
}

export default Projects