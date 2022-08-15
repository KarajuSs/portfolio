import gsap from 'gsap-trial'
import { useEffect, useRef } from 'react'
import LogoK from '../../../assets/images/logoK.png'
import './index.scss'

const Logo = () => {
    const bgRef = useRef()
    const outlineLogoRef = useRef()
    const solidLogoRef = useRef()

    useEffect(() => {
        gsap
        .timeline()
        .to(bgRef.current, {
            duration: 1,
            opacity: 1,
        })
        .from(outlineLogoRef.current, {
            drawSVG: 0,
            duration: 20,
        })

        gsap.fromTo(
        solidLogoRef.current,
        {
            opacity: 0,
        },
        {
            opacity: 1,
            delay: 4,
            duration: 4,
        }
        )
    }, [])

    return (
        <div className='logo-container' ref={bgRef}>
            <img ref={solidLogoRef} className='solid-logo' src={LogoK} alt="K"/>
            <svg
                width="600pt"
                height="800pt"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
	            viewBox="0 0 600 800">

                <g className="svg-container" transform="translate(0 457) scale(.1 -.1)" fill="none">
                    <path ref={outlineLogoRef} d="M225.7,356.2L580.7,2l-142,0l-213,211.9V2l-171,168.1V798h172l-1-210l210,210h145l-355-350.2L225.7,356.2
                        L225.7,356.2z M226,449c0-0.8,0-1-0.5-1v0.5h-47l-46-48l46-44h47V448C226,448,226,448.2,226,449z"/>
                </g>
            </svg>
        </div>
    )
}

export default Logo