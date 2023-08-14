import { ThemeContext } from '../../contexts/ThemeContext/ThemeContext'
import * as S from './BurgerMenuStyle'
import { useContext, useState, useRef } from 'react'

export function BurgerMenu() {

    const [isOpen, setIsOpen] = useState(false)
    const { theme } = useContext(ThemeContext)
    const topBurger = useRef<HTMLSpanElement>(null)
    const midBurger = useRef<HTMLSpanElement>(null)
    const bottomBurger = useRef<HTMLSpanElement>(null)

    const handleClick = () => {
        setIsOpen(!isOpen)
        if (isOpen) {
            topBurger.current?.classList.remove('open')
            midBurger.current?.classList.remove('open')
            bottomBurger.current?.classList.remove('open')
            document.body.style.overflow = 'hidden'
        } else {
            topBurger.current?.classList.add('open')
            midBurger.current?.classList.add('open')
            bottomBurger.current?.classList.add('open')
            document.body.style.overflow = 'auto'
        }
    }

    return (
        <S.ContainerBurguerMenu>
            <S.ButtonMenu onClick={handleClick}>
                <S.BurguerMenu backgroundcolor={theme.textColor}>
                    <span ref={topBurger} />
                    <span ref={midBurger} />
                    <span ref={bottomBurger} />
                </S.BurguerMenu>
                </S.ButtonMenu>
                {isOpen && 
                <S.navLinks backgroundcolor={theme.containerPrimaryColor}>
                    <S.list>
                        <a href="#about"><S.listItem textcolor={theme.textColor}>Sobre mim</S.listItem></a>
                        <a href="#skills"><S.listItem textcolor={theme.textColor}>Habilidades</S.listItem></a>
                        <a href="#projects"><S.listItem textcolor={theme.textColor}>Projetos</S.listItem></a>
                        <a href="#contact"><S.listItem textcolor={theme.textColor}>Contato</S.listItem></a>
                    </S.list>
                </S.navLinks>
                }


        </S.ContainerBurguerMenu>
    )
}