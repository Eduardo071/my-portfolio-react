import styled from 'styled-components'
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  backgroundcolor?: string;
  textColor?: string;
}

export const Header = styled.header<HeaderProps>`
padding: 1rem 1.7rem;
display: flex;
height: 8.5vh;
margin-bottom: 3.25vh;
justify-content: space-between;
align-items: center;
background-color: ${props => props.backgroundcolor};
`
export const Title = styled.h1<HeaderProps>`

font-size: 3rem;
color: ${props => props.textColor};
`

export const specialTitle = styled.strong<HeaderProps>`
  font-size: 3rem;
  color: ${props => props.textColor};
`

export const navLinks = styled.nav`
display: flex;
`

export const list = styled.ul`
display: flex;
gap: 1.7rem;
`

export const listItem = styled.li<HeaderProps>`
font-size: 2.1rem;
color: ${props => props.textColor};
`