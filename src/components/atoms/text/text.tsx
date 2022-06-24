import styled from 'styled-components'

export interface TextProps {
  desc: string
}

const Text = styled.div`
  size: 10px;
`

const text = ({ desc }: TextProps) => {
  return <Text>{desc}</Text>
}

export default text
