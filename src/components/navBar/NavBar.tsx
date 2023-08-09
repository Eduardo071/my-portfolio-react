import * as S from './NavBarStyle'
import { ThemeContext } from "../../contexts/ThemeContext/ThemeContext";
import { useContext } from 'react'
import { Toggler } from "../Toggler/Toggler";

export function NavBar() {

    const { theme } = useContext(ThemeContext)
    return (
        <S.Header backgroundcolor={theme.navBarBackgroundColor}>
            <S.Title textColor={theme.textColor}>Meu <S.specialTitle textColor={theme.specialTextColor}>Portfólio</S.specialTitle></S.Title>

            <S.navLinks>
                <S.list>
                    <S.InternalLink href="#about"><S.listItem textColor={theme.textColor}>Sobre mim</S.listItem></S.InternalLink>
                    <S.InternalLink href="#skills"><S.listItem textColor={theme.textColor}>Habilidades</S.listItem></S.InternalLink>
                    <S.InternalLink href="#projects"><S.listItem textColor={theme.textColor}>Projetos</S.listItem></S.InternalLink>
                    <S.InternalLink href="#contact"><S.listItem textColor={theme.textColor}>Contato</S.listItem></S.InternalLink>
                </S.list>
            </S.navLinks>

            <Toggler />
            
        </S.Header>
    )
}