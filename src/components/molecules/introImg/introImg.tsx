import styled from 'styled-components'

import Image, { ImgProps } from '../../atoms/image/image'
import Text, { TextProps } from '../../atoms/text/text'

const IntroContainer = styled.div`
  position: relative;
  width: 400px;
  height: 338px;
`
const TextContainer = styled.div`
  position: absolute;
  left: 50%;
  bottom: -30px;
`

interface IntroImgProps extends TextProps, ImgProps {}

const IntroImg = ({ imgPath, desc }: IntroImgProps) => {
  return (
    <IntroContainer>
      <Image imgPath={imgPath} />
      <TextContainer>
        <Text desc={desc} fontColor="grey" fontSize="15px" />
      </TextContainer>
    </IntroContainer>
  )
}

export default IntroImg
