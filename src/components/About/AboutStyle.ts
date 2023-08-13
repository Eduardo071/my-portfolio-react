import { styled } from 'styled-components'
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface AboutProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  backgroundcolor?: string;
  textcolor?: string;
  shadowcolor?: string;
}

export const ContainerAbout = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
gap: 2rem;
height: 100vh;

@media (max-width: 768px) {
  height: auto;
  align-items: center;
}
`

export const ContainerTitleAbout = styled.div<AboutProps>`
display: flex;
width: 43rem;
padding: 1rem 0;
justify-content: center;
align-items: center;
align-self: center;
background-color: ${props => props.backgroundcolor};
clip-path: polygon(15% 0, 90% 0, 75% 100%, 0% 100%);

@media (max-width: 786px) {
  width: 38rem;
  margin-left: 4rem;
}
`

export const TitleText = styled.h1<AboutProps>`
font-size: 5rem;
color: ${props => props.textcolor};
margin-right: 4rem;

@media (max-width: 786px) {
  font-size: 4rem;
}
`

export const SpecialTitleText = styled.strong<AboutProps>`
font-size: 5rem;
color: ${props => props.textcolor};

@media (max-width: 786px) {
  font-size: 4rem;
}
`

export const ContainerDetailsAbout = styled.section<AboutProps>`
background-color: ${props => props.backgroundcolor};
border-radius: 8rem;
display: flex;
gap: 8rem;
align-items: center;
justify-content: space-between;
width: 80vw;
align-self: center;
padding: 6rem 3rem;
box-shadow: 5px 17px 31px 0px ${props => props.shadowcolor};

@media (max-width: 786px) {
  flex-direction: column;
}
`

export const MyPhoto = styled.img<AboutProps>`
border-radius: 50%;
width: 30rem;

@media (max-width: 786px) {
  width: 25rem;
}
`

export const AboutText = styled.p<AboutProps>`
font-size: 2rem;
color: ${props => props.textcolor};
text-align: justify;
`
export const ContainerAboutAnimate = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;
justify-content: center;
align-items: center;
`

