import styled from 'styled-components'

import Image, { ImgProps } from '../../atoms/image/image'
import Text, { TextProps } from '../../atoms/text/text'

interface IntroImgProps extends TextProps, ImgProps {}

const IntroContainer = styled.div`
  position: relative;
  width: 400px;
  height: 338px;
`
const TextContainer = styled.div`
  width: 100%;
  position: absolute;
  text-align: center;
  bottom: 45px;
`

const IntroImg = ({ imgPath, desc }: IntroImgProps) => {
  return (
    <IntroContainer>
      <Image imgPath={imgPath} />
      <TextContainer>
        <Text desc={desc} fontColor="rgba(58, 58, 58, 0.7)" fontSize="15px" />
      </TextContainer>
    </IntroContainer>
  )
}

export default IntroImg
