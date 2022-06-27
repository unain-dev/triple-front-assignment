import styled from 'styled-components'

export interface ImgProps {
  imgPath: string
}

const Img = styled.img`
  width: 100%;
  height: 100%;
`

const image = ({ imgPath }: ImgProps) => {
  return <Img src={imgPath} />
}

export default image
