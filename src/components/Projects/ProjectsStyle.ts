import styled from 'styled-components'
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ProjectsProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
    backgroundcolor?: string;
    textcolor?: string;
    fontcolor?: string;
}

export const ContainerProjects = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
gap: 2rem;

@media(max-width: 786px) {
    margin-bottom: 20rem;
}
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

@media (max-width: 786px) {
    width: 38rem;
}
`

export const TitleText = styled.h1<ProjectsProps>`
font-size: 5rem;
color: ${props => props.textcolor};
margin-right: 10rem;

@media (max-width: 786px) {
    font-size: 3.8rem;
    margin-right: 5rem;
}
`

export const SpecialTitleText = styled.strong<ProjectsProps>`
font-size: 5rem;
color: ${props => props.textcolor};

@media (max-width: 786px) {
    font-size: 3.8rem;
}
`


export const LineDivisor = styled.span<ProjectsProps>`
background-color: ${props => props.fontcolor};
width: 100vw;
height: 0.1rem;
margin-top: 4.2rem;
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
color: ${props => props.textcolor};
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

@media (max-width: 786px) {
    width: 30rem;
}
`

export const ImageDesktopPreview = styled.img`
width: 35rem;
position: absolute;
z-index: 0;
top: 0.4rem;
left: 2.63rem;
z-index: 1;

@media (max-width: 786px) {
    width: 25rem;
}
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

@media (max-width: 786px) {
    width: 8rem;
}
`

export const ImageMobilePreview = styled.img`
position: absolute;
left: 1.65rem;
top: 0.8rem;
z-index: -1;
width: 8.8rem;

@media (max-width: 786px) {
    width: 6rem;
    left: 1rem;
    top: 0.4rem;
}
`

export const DescriptionText = styled.p<ProjectsProps>`
font-size: 2.4rem;
color: ${props => props.textcolor};
text-align: justify;
`

export const RepoLink = styled.a<ProjectsProps>`
font-size: 2.5rem;
color: ${props => props.textcolor};
`

export const DeployLink = styled.a<ProjectsProps>`
font-size: 2.5rem;
color: ${props => props.textcolor};
`