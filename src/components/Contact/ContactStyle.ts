import styled from 'styled-components'
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ContactProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
    backgroundcolor?: string;
    textcolor?: string;
    shadowcolor?: string;
}

export const ContainerContact = styled.section<ContactProps>`
display: flex;
flex-direction: column;
height: 100vh;
justify-content: end;
gap: 2rem;

@media(max-width: 786px) {
    margin-top: 25rem;
}
`

export const ContainerTitleContact = styled.div<ContactProps>`
display: flex;
width: 48rem;
padding: 1rem 0;
justify-content: center;
align-items: center;
align-self: center;
background-color: ${props => props.backgroundcolor};
clip-path: polygon(15% 0, 90% 0, 75% 100%, 0% 100%);

@media(max-width: 786px) {
    width: 38rem;
    margin-left: 4rem;
}
`

export const TitleText = styled.h1<ContactProps>`
font-size: 5rem;
color: ${props => props.textcolor};
margin-right: 4rem;

@media(max-width: 786px) {
    font-size: 4rem;
}
`

export const SpecialTitleText = styled.strong<ContactProps>`
font-size: 5rem;
color: ${props => props.textcolor};

@media(max-width: 786px) {
    font-size: 4rem;
}
`

export const ContainerContactDetails = styled.section<ContactProps>`
display: flex;
width: 100vw;
min-height : 80vh;
background-color: ${props => props.backgroundcolor};
justify-content: space-between;
padding: 5rem 6rem;

@media(max-width: 786px) {
    flex-direction: column;
    gap: 8rem;
    min-height: auto;
}
`

export const ContainerContactText = styled.div<ContactProps>`
display: flex;
flex-direction: column;
gap: 1rem;
max-width: 58rem;
`

export const Subtitle = styled.h2<ContactProps>`
font-size: 5rem;
color: ${props => props.textcolor};

@media(max-width: 786px) {
    font-size: 3rem;
}
`

export const SpecialSubtitle = styled.strong<ContactProps>`
font-size: 5rem;
color: ${props => props.textcolor};

@media(max-width: 786px) {
    font-size: 3rem;
}
`

export const Paragraph = styled.p<ContactProps>`
font-size: 2.4rem;
color: ${props => props.textcolor};
text-align: justify;

@media(max-width: 786px) {
    font-size: 2rem;
}
`

export const SpecialParagraph = styled.strong<ContactProps>`
font-size: 2.4rem;
color: ${props => props.textcolor};

@media(max-width: 786px) {
    font-size: 2rem;
}
`

export const LinkEmail = styled.a<ContactProps>`
display: flex;
gap: 1rem;
align-items: center;
transition: 0.3s;
width: 28rem;
height: 3rem;
&:hover{
    opacity: 0.6;
}
`

export const Svg = styled.svg<ContactProps>`
width: 3rem;

@media(max-width: 786px) {
    width: 2.5rem;
}
`

export const EmailText = styled.h2<ContactProps>`
font-size: 2.4rem;
color: ${props => props.textcolor};

@media(max-width: 786px) {
    font-size: 2rem;
}
`

export const Form = styled.form<ContactProps>`
display: flex;
flex-direction: column;
`

export const Label = styled.label<ContactProps>`
font-size: 3rem;
color: ${props => props.textcolor};

@media(max-width: 786px) {
    font-size: 2.5rem;
}
`

export const Input = styled.input<ContactProps>`
width: 40vw;
height: 6rem;
background-color: ${props => props.backgroundcolor};
border-style: none;
border-radius: 1rem;
padding: 0 1rem;
font-size: 2.4rem;
color: ${props => props.textcolor};

&::placeholder {
    color: ${props => props.textcolor};
}

@media(max-width: 786px) {
    width: 73vw;
    font-size: 2rem;
}
`

export const ButtonSubmit = styled.button<ContactProps>`
width: 20rem;
height: 6rem;
border-style: none;
border-radius: 1rem;
padding: 0 1rem;
font-size: 2.4rem;
align-self: center;
font-size: 2.4rem;
color: ${props => props.textcolor};
box-shadow: 5px 17px 31px 0px ${props => props.shadowcolor};
background-color: ${props => props.backgroundcolor};

&:hover{
    cursor: pointer;
}

@media(max-width: 786px) {
    font-size: 2rem;
}
`

export const TextArea = styled.textarea<ContactProps>`
width: 40vw;
height: 18rem;
background-color: ${props => props.backgroundcolor};
color: ${props => props.textcolor};
border-style: none;
border-radius: 1rem;
margin-bottom: 1rem;
resize: none;
font-size: 2.4rem;
padding: 1rem;

&::placeholder {
    color: ${props => props.textcolor};
}

@media(max-width: 786px) {
    width: 73vw;
    font-size: 2rem;
}
`