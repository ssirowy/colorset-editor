import { styled } from 'looker-lens'

export const swatchSize = 20

export interface SwatchProps {
  color: string
}

export const Swatch = styled.div<SwatchProps>`
  background-color: ${props => props.color};
  height: ${swatchSize}px;
  width: ${swatchSize}px;
`
