import { styled } from 'styled-components';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface HeroProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
    textcolor?: string;
    fontcolor?: string;
}

export const ContainerHero = styled.main`
width: 100vw;
min-height: 85vh;
display: flex;
justify-content: center;
align-items: center;
margin-top: 8.5vh;
`

export const ContainerTextHero = styled.div`
display: flex;
flex-direction: column;
z-index: 1;
`

export const Subtitle = styled.h3<HeroProps>`
font-size: 1.519vw;
color: ${props => props.textcolor};

&:hover {
cursor: default;
}
`

export const Title = styled.h1<HeroProps>`
font-size: 10.033vw;
line-height: 7.36vw;
color: ${props => props.textcolor};

&:hover {
    cursor: default;
}
`

export const SpecialTitle = styled.strong<HeroProps>`    
font-size: 10.033vw;
line-height: 9.36vw;
color: ${props => props.textcolor};

&:hover {
    cursor: default;
}
`

export const FirstLineHero = styled.div`
display: flex;
gap: 4.68vw;
align-items: center;
`

export const ListOfMediaSocial = styled.ul`
display: flex;
gap: 1.34vw;
`

export const BackgroundImage = styled.img`
z-index: 0;
position: absolute;
height: 80vh;
width: 80vw;
`
export const ContainerDetailsHero = styled.div`
display: flex;
justify-content: center;
align-items: center;
` 