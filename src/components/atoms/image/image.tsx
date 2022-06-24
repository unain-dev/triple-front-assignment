import React from 'react'
import styled from 'styled-components'

export interface ImgProps {
  imgPath: string
}

const IMG = styled.img`
  width: 500px;
`

const image = ({ imgPath }: ImgProps) => {
  return <IMG src={imgPath} />
}

export default image
