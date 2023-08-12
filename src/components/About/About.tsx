import { ThemeContext } from '../../contexts/ThemeContext/ThemeContext'
import MyPhoto from '../../images/myPhoto.jpeg'
import * as S from './AboutStyle'
import { useContext, useEffect } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { gsap } from "gsap"

gsap.registerPlugin(ScrollTrigger)


export function About() {

    useEffect(() => {
        gsap.fromTo("#containerAnimation",
            {
                y: 500
            },
            {
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: "#about",
                    start: "top bottom",
                    scrub: true,
                    toggleActions: "play none none reverse",
                },
            }
        )
    }, [])

    const { theme } = useContext(ThemeContext)
    return (
        <S.ContainerAbout id='about'>
            <S.ContainerAboutAnimate id='containerAnimation'>
            <S.ContainerTitleAbout id='aboutLabel' backgroundcolor={theme.containerPrimaryColor}>
                <S.TitleText textcolor={theme.textColor}>Sobre
                    <S.SpecialTitleText textcolor={theme.specialTextColor}> mim</S.SpecialTitleText>
                </S.TitleText>

            </S.ContainerTitleAbout>

            <S.ContainerDetailsAbout id='detailsAbout' shadowcolor={theme.borderShadowColor} backgroundcolor={theme.containerPrimaryColor}>
                <S.MyPhoto src={MyPhoto} alt="My photo" />
                <S.AboutText textcolor={theme.textColor}>Sou um entusiasta do desenvolvimento front-end com um ano de dedicação ao estudo e à prática de programação. Minha paixão pelo JavaScript, HTML e CSS é complementada pela emoção de integrar API's e criar com React.js, Styled-components ou até mesmo Sass.

                    Adoro transformar conceitos em interfaces atraentes e funcionais. Enfrentar desafios é uma oportunidade de crescimento; sou ávido por pesquisa e colaboração quando necessário. Aprendizado contínuo é uma constante, e mantenho-me atualizado por meio de canais online e recursos diversos.

                    Valorizo o trabalho em equipe e acredito que feedback construtivo impulsiona o progresso. Além do código, encontro prazer em games, séries, filmes e caminhadas ao ar livre.</S.AboutText>
            </S.ContainerDetailsAbout>
            </S.ContainerAboutAnimate>
        </S.ContainerAbout>
    )
}