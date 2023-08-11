import * as S from './NavBarStyle'
import { ThemeContext } from "../../contexts/ThemeContext/ThemeContext";
import { useContext } from 'react'
import { Toggler } from "../Toggler/Toggler";

export function NavBar() {

    const { theme } = useContext(ThemeContext)
    return (
        <S.Header backgroundcolor={theme.navBarBackgroundColor}>
            <S.Title textcolor={theme.textColor}>Meu <S.specialTitle textcolor={theme.specialTextColor}>Portfólio</S.specialTitle></S.Title>

            <S.navLinks>
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