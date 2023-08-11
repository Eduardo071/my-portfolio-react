import styled from 'styled-components'
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ColorFilterProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  backgroundcolor: string;
}

export const Filter = styled.div<ColorFilterProps>`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  background-color: ${props => props.backgroundcolor};
`