import { ThemeContext } from '../../contexts/ThemeContext/ThemeContext'
import MyPhoto from '../../images/myPhoto.jpeg'
import * as S from './AboutStyle'
import { useContext } from 'react'

export function About() {

    const { theme } = useContext(ThemeContext)
    return (
        <S.ContainerAbout id='about'>
            <S.ContainerTitleAbout backgroundcolor={theme.containerPrimaryColor}>
                <S.TitleText textcolor={theme.textColor}>Sobre
                <S.SpecialTitleText textcolor={theme.specialTextColor}> mim</S.SpecialTitleText> 
                </S.TitleText>
                
            </S.ContainerTitleAbout>

            <S.ContainerDetailsAbout shadowcolor={theme.borderShadowColor} backgroundcolor={theme.containerPrimaryColor}>
                <S.MyPhoto src={MyPhoto} alt="My photo" />
                <S.AboutText textcolor={theme.textColor}>Sou um entusiasta do desenvolvimento front-end com um ano de dedicação ao estudo e à prática de programação. Minha paixão pelo JavaScript, HTML e CSS é complementada pela emoção de integrar API's e criar com React.js, Styled-components ou até mesmo Sass.

                    Adoro transformar conceitos em interfaces atraentes e funcionais. Enfrentar desafios é uma oportunidade de crescimento; sou ávido por pesquisa e colaboração quando necessário. Aprendizado contínuo é uma constante, e mantenho-me atualizado por meio de canais online e recursos diversos.

                    Valorizo o trabalho em equipe e acredito que feedback construtivo impulsiona o progresso. Além do código, encontro prazer em games, séries, filmes e caminhadas ao ar livre.</S.AboutText>
            </S.ContainerDetailsAbout>
        </S.ContainerAbout>
    )
}