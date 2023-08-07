import styled from 'styled-components'
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  backgroundcolor?: string;
  fontColor?: string;
}

export const Toggler = styled.div<HeaderProps>`
background-color: ${props => props.backgroundcolor};
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
padding: 0.5rem;

&:hover{
    cursor: pointer;
}
`