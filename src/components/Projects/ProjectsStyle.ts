import styled from 'styled-components'
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ProjectsProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
    backgroundcolor?: string;
    textColor?: string;
    fontColor?: string;
}

export const ContainerProjects = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
gap: 2rem;
`

export const ContainerTitleProjects = styled.div<ProjectsProps>`
display: flex;
width: 58rem;
padding: 1rem 0;
margin-left: 7rem;
justify-content: center;
align-items: center;
align-self: center;
background-color: ${props => props.backgroundcolor};
clip-path: polygon(10% 0, 85% 0, 75% 100%, 0% 100%);
`

export const TitleText = styled.h1<ProjectsProps>`
font-size: 5rem;
color: ${props => props.textColor};
margin-right: 10rem;
`

export const SpecialTitleText = styled.strong<ProjectsProps>`
font-size: 5rem;
color: ${props => props.textColor};
`


export const LineDivisor = styled.span<ProjectsProps>`
background-color: ${props => props.fontColor};
width: 100vw;
height: 0.1rem;
`

export const ContainerAllProjects = styled.div<ProjectsProps>`
width: 80vw;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
gap: 4rem;
`

export const CardProject = styled.section<ProjectsProps>`
display: flex;
align-items: center;
width: 40rem;
flex-direction: column;
gap: 1rem;
`

export const ProjectTitle = styled.h1<ProjectsProps>`
font-size: 3rem;
color: ${props => props.textColor};
`

export const ContainerPreview = styled.div<ProjectsProps>`
display: flex;
position: relative;
`

export const DesktopPreview = styled.div<ProjectsProps>`
display: flex;
`

export const ImageDesktopFrame = styled.img`
width: 40rem;
z-index: 2;
`

export const ImageDesktopPreview = styled.img`
width: 35rem;
position: absolute;
z-index: 0;
top: 0.4rem;
left: 2.63rem;
z-index: 1;
`

export const MobilePreview = styled.div<ProjectsProps>`
position: absolute;
z-index: 2;
left: 0;
bottom: 0;
`

export const ImageMobileFrame = styled.img`
width: 12rem;
position: relative;
`

export const ImageMobilePreview = styled.img`
position: absolute;
left: 1.65rem;
top: 0.8rem;
z-index: -1;
width: 8.8rem;
`

export const DescriptionText = styled.p<ProjectsProps>`
font-size: 2.8rem;
color: ${props => props.textColor};
text-align: justify;
`

export const RepoLink = styled.a<ProjectsProps>`
font-size: 2.8rem;
color: ${props => props.textColor};
`

export const DeployLink = styled.a<ProjectsProps>`
font-size: 2.8rem;
color: ${props => props.textColor};
`