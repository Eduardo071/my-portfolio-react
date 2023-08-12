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
`

export const TitleText = styled.h1<SkillsProps>`
font-size: 5rem;
color: ${props => props.textcolor};
margin-right: 10rem;
`

export const SpecialTitleText = styled.strong<SkillsProps>`
font-size: 5rem;
color: ${props => props.textcolor};
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
`

export const SkillName = styled.h1<SkillsProps>`
font-size: 2rem;
color: ${props => props.textcolor};
text-align: center;
`
export const ContainerSkillAnimate = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;
`