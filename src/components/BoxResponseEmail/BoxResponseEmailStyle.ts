import styled from 'styled-components'
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface BoxResponseEmailProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
    backgroundcolor?: string;
    textcolor?: string;
}

export const ContainerBox = styled.div<BoxResponseEmailProps>`
display: flex;
flex-direction: column;
justify-content: end;
width: 25vw;
height: 15vh;
background-color: ${props => props.backgroundcolor};
position: fixed;
z-index: 3;
top: 2rem;
right: 2rem;
border-radius: 2rem;
overflow-y: hidden;
animation: opacityDown 3.5s linear;

@keyframes opacityDown {
    0% {
        opacity: 1;
    } 75% {
        opacity: 0.6;
    } 100% {
        opacity: 0;
    }
}
`

export const ContainerMessage = styled.div`
display: flex;
min-height: calc(100% - 0.5rem);
justify-content: center;
align-items: center;
text-align: justify;
`

export const MessageText = styled.p<BoxResponseEmailProps>`
font-size: 2rem;
color: ${props => props.color};
margin: 0 1rem;
`

export const ProgressBar = styled.div<BoxResponseEmailProps>`
background-color: ${props => props.backgroundcolor};
display: flex;
width: 100%;
height: 0.5rem;
animation: progress 3.5s linear;

@keyframes progress {
    0% {
        width: 100%;
    } 100% {
        width: 0%;
    }
}
`