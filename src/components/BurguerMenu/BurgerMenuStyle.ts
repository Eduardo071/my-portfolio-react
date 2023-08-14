import styled from 'styled-components'
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface BurgerMenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  backgroundcolor?: string;
  textcolor?: string;
}

export const ContainerBurguerMenu = styled.section`
display: flex;
flex-direction: column;
gap: 1.5rem;

@media (min-width: 786px){
    display: none;
}
overflow: hidden;
`

export const ButtonMenu = styled.button`
background: transparent;
border: none;
width: 3rem;
height: 3rem;
justify-self: end;

&:hover{
    cursor: pointer;
}
`

export const BurguerMenu = styled.div<BurgerMenuProps>`
width: 3rem;
height: 3rem;
display: flex;
flex-direction: column;
gap: 0.5rem;
position: relative;
justify-content: center;
align-items: center;
position: relative;


span{
    background-color: ${props => props.backgroundcolor};
    width: 2rem;
    height: 0.3rem;
    border-radius: 0.5rem;
    transition: animation 1s, 0.2s;


}

span.open{
    &:first-child{
            position: absolute;
            rotate: 45deg;
            width: 3rem;
            animation: rotate 0.5 linear;

            @keyframes rotate {
                from{
                    rotate: 0;
                }to{
                    rotate: 45deg;
                }
            }
        }
        &:nth-child(2){
            rotate: 45deg;
            width: 3rem;
            animation: rotate 0.5 linear;

            @keyframes rotate {
                from{
                    rotate: 0;
                }to{
                    rotate: 45deg;
                }
            }
        }
        &:last-child{
            position: absolute;
            rotate: -45deg;
            width: 3rem;
            animation: rotate 0.5 linear;

            @keyframes rotate {
                from{
                    rotate: 0;
                }to{
                    rotate: -45deg;
                }
            }
        }
}
`

export const navLinks = styled.nav<BurgerMenuProps>`
display: flex;
flex-direction: column;
position: absolute;
right: 0;
top: 5rem;
padding: 1rem;
background-color: ${props => props.backgroundcolor};
border-bottom-left-radius: 2rem;
border-top-left-radius: 2rem;
margin-top: 0.9rem;
animation: toLeft 1s ease-in;

@keyframes toLeft{
    from{
        right: -15rem;
    }to{
        right: 0;
    }
}
`

export const list = styled.ul`
display: flex;
flex-direction: column;
justify-content: center;
gap: 1.7rem;
`

export const listItem = styled.li<BurgerMenuProps>`
font-size: 2.1rem;
text-align: left;
color: ${props => props.textcolor};
`