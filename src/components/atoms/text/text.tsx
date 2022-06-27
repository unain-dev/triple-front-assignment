import { ReactNode } from 'react'
import styled from 'styled-components'

export interface TextProps {
  desc: string | ReactNode
  fontColor?: string
}

export interface TextStyleProps {
  fontColor?: string
}

const Text = styled.div<TextStyleProps>`
  size: 10px;
  color: ${(props) => props.fontColor};
`

const text = ({ desc, fontColor = 'black' }: TextProps) => {
  return <Text fontColor={fontColor}>{desc}</Text>
}

export default text
