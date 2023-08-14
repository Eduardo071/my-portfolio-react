import styled from 'styled-components'
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SkillsProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  backgroundcolor?: string;
  textcolor?: string;
  shadowcolor?: string;
}

export const ContainerSkills = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
gap: 2rem;
height: 100vh;
`

export const ContainerTitleSkills = styled.div<SkillsProps>`
display: flex;
width: 70rem;
padding: 1rem 0;
margin-left: 7rem;
justify-content: center;
align-items: center;
align-self: center;
background-color: ${props => props.backgroundcolor};
clip-path: polygon(10% 0, 85% 0, 75% 100%, 0% 100%);

@media screen and (max-width: 786px) {
  width: 38rem;
}
`

export const TitleText = styled.h1<SkillsProps>`
font-size: 5rem;
color: ${props => props.textcolor};
margin-right: 10rem;

@media screen and (max-width: 786px) {
  font-size: 2.8rem;
  margin-right: 5.5rem;
}
`

export const SpecialTitleText = styled.strong<SkillsProps>`
font-size: 5rem;
color: ${props => props.textcolor};

@media screen and (max-width: 786px) {
  font-size: 2.8rem;
}
`

export const ContainerMySkills = styled.section<SkillsProps>`
display: flex;
align-self: center;
justify-content: space-between;
background-color: ${props => props.backgroundcolor};
width: 80vw;
min-height: 28vh;
border-radius: 2.4rem;
padding: 5rem 1.5rem;
box-shadow: 5px 17px 31px 0px ${props => props.shadowcolor};

@media screen and (max-width: 786px) {
  min-height: 18vh;
  padding: 2rem 1.5rem;
}
`

export const Card = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const SkillImage = styled.img`
width: 8rem;
height: 8rem;

@media screen and (max-width: 786px) {
  width: 6rem;
  height: 6rem;
}
`

export const SkillName = styled.h1<SkillsProps>`
font-size: 2rem;
color: ${props => props.textcolor};
text-align: center;

@media screen and (max-width: 786px) {
  font-size: 1.8rem;
}
`
export const ContainerSkillAnimate = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;


`