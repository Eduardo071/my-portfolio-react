import * as S from './NavBarStyle'
import { ThemeContext } from "../../contexts/ThemeContext/ThemeContext";
import { useContext, useEffect } from 'react'
import { Toggler } from "../Toggler/Toggler";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { gsap } from "gsap"

gsap.registerPlugin(ScrollTrigger)
    
export function NavBar() {
    
    useEffect(() => {
        gsap.fromTo("#title",
        {
            x: -300
        },
        {
            x: 0,
            duration: 0.5,
            scrollTrigger: {
                trigger: "#header",
                start: "top bottom",
            },
        }
    )

    gsap.fromTo("#listOfLinks",
        {
            y: -100
        },
        {
            y: 0,
            duration: 0.5,
            scrollTrigger: {
                trigger: "#header",
                start: "top bottom",
            },
        }
    )

    gsap.fromTo("#toggler", 
    {
        x: 100
    },
    {
        x: 0,
        duration: 0.5,
        scrollTrigger: {
            trigger: "#header",
            start: "top bottom",
        },
    }
    )
    
    }, [])

    const { theme } = useContext(ThemeContext)
    return (
        <S.Header id='header' backgroundcolor={theme.navBarBackgroundColor}>
            <S.Title id='title' textcolor={theme.textColor}>Meu <S.specialTitle textcolor={theme.specialTextColor}>Portfólio</S.specialTitle></S.Title>

            <S.navLinks id='listOfLinks'>
                <S.list>
                    <S.InternalLink href="#about"><S.listItem textcolor={theme.textColor}>Sobre mim</S.listItem></S.InternalLink>
                    <S.InternalLink href="#skills"><S.listItem textcolor={theme.textColor}>Habilidades</S.listItem></S.InternalLink>
                    <S.InternalLink href="#projects"><S.listItem textcolor={theme.textColor}>Projetos</S.listItem></S.InternalLink>
                    <S.InternalLink href="#contact"><S.listItem textcolor={theme.textColor}>Contato</S.listItem></S.InternalLink>
                </S.list>
            </S.navLinks>

            <Toggler />
            
        </S.Header>
    )
}