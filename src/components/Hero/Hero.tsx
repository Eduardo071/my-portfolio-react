import { Link } from 'react-router-dom'
import * as S from './HeroStyle'
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext/ThemeContext'
import myStacks from '../../assets/my stacks icons.svg'
import { CvIcon } from '../CvIcon/CvIcon'
import { LinkedinIcon } from '../LinkedinIcon/LinkedinIcon'
import { GithubIcon } from '../GithubIcon/GithubIcon'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { gsap } from "gsap"

gsap.registerPlugin(ScrollTrigger)
gsap.fromTo("#stacksImage, #textHero",
    {
        y: 200
    },
    {
        y: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#stacksImage",
            start: "top bottom+=1500",
            scrub: true,
            toggleActions: "play none none reverse",
        }
    }
)

export function Hero() {

    const { theme } = useContext(ThemeContext)

    const pdfFileName = 'EduardoBorges_DevFrontEndJunior.pdf'
    return (
        <S.ContainerHero>
            <S.BackgroundImage id='stacksImage' src={myStacks} alt="" />
            <S.ContainerTextHero id='textHero'>
            <S.Subtitle textcolor={theme.subTextColor}>Olá 👋 me chamo Eduardo</S.Subtitle>
            <S.FirstLineHero>
                <S.Title textcolor={theme.textColor}>REACT</S.Title>
                <S.ListOfMediaSocial>
                    <Link to='https://www.linkedin.com/in/eduardopereiraborges/' target='_blank'> <li> <LinkedinIcon /> </li> </Link>
                    <Link to='https://github.com/Eduardo071/' target='_blank'> <li> <GithubIcon /> </li> </Link>
                    <Link to={window.location.origin + '/' + pdfFileName} download={pdfFileName} target='_blank'> <li> <CvIcon /> </li> </Link>
                </S.ListOfMediaSocial>
            </S.FirstLineHero>
            <S.SpecialTitle textcolor={theme.specialTextColor}>DEVELOPER</S.SpecialTitle>
            </S.ContainerTextHero>
        </S.ContainerHero>
    )
}