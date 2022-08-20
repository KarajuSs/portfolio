import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const SkillPercent = ({ clazz, array, percent, idx }) => {
    return (
        <div className='skill'>
            <AnimatedLetters
                letterClass={clazz}
                strArray={array}
                idx={idx}/>
            <div className='skill-bar' data-percent={percent}>
                {percent}%
            </div>
        </div>
    );
}

export default SkillPercent