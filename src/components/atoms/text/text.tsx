import { ReactNode } from 'react'
import styled from 'styled-components'

export interface TextStyleProps {
  fontColor?: string
  fontSize?: string
}

export interface TextProps extends TextStyleProps {
  desc: string | ReactNode
}

const Stext = styled.span<TextStyleProps>`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.fontColor};
`

const text = ({ desc, fontColor = 'black', fontSize = '12px' }: TextProps) => {
  return (
    <Stext fontColor={fontColor} fontSize={fontSize}>
      {desc}
    </Stext>
  )
}

export default text
