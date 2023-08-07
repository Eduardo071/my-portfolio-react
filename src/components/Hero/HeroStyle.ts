import { styled } from 'styled-components';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
    textcolor?: string;
    fontColor?: string;
}

export const ContainerHero = styled.main`
width: 100vw;
min-height: 85vh;
display: flex;
justify-content: center;
align-items: center;
`

export const ContainerTextHero = styled.div`
display: flex;
flex-direction: column;
z-index: 1;
`

export const Subtitle = styled.h3<HeaderProps>`
font-size: 2.2rem;
    color: ${props => props.textcolor};
`

export const Title = styled.h1<HeaderProps>`
font-size: 15rem;
line-height: 11rem;
color: ${props => props.textcolor};
`

export const SpecialTitle = styled.strong<HeaderProps>`    
font-size: 15rem;
line-height: 14rem;
color: ${props => props.textcolor};
`

export const FirstLineHero = styled.div`
display: flex;
gap: 7rem;
align-items: center;
`

export const ListOfMediaSocial = styled.ul`
display: flex;
gap: 2rem;
`

export const BackgroundImage = styled.img`
z-index: 0;
position: absolute;
height: 80vh;
`
// export const MediaSocialIcon = styled.img<HeaderProps>`
// background-color: ${props => props.fontColor};
// `