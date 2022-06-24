import React from 'react'
import styled from 'styled-components'

export interface TextProps {
  desc: string
}

const TEXT = styled.div`
  size: 10px;
`

const text = ({ desc }: TextProps) => {
  return <TEXT>{desc}</TEXT>
}

export default text
