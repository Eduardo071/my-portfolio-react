import * as S from './NavBarStyle'
import { ThemeContext } from "../../contexts/ThemeContext/ThemeContext";
import { useContext, useEffect } from 'react'
import { Toggler } from "../Toggler/Toggler";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { gsap } from "gsap"
import { BurgerMenu } from '../BurguerMenu/BurgerMenu';

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
                    <a href="#about"><S.listItem textcolor={theme.textColor}>Sobre mim</S.listItem></a>
                    <a href="#skills"><S.listItem textcolor={theme.textColor}>Habilidades</S.listItem></a>
                    <a href="#projects"><S.listItem textcolor={theme.textColor}>Projetos</S.listItem></a>
                    <a href="#contact"><S.listItem textcolor={theme.textColor}>Contato</S.listItem></a>
                </S.list>
            </S.navLinks>

            
            <S.div>
            <Toggler />
            <BurgerMenu />
            </S.div>
            
            
        </S.Header>
    )
}