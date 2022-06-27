import styled from 'styled-components'

import Image, { ImgProps } from '../../atoms/image/image'
import Text, { TextProps } from '../../atoms/text/text'

const AwardContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 39px;
`
const ImageContainer = styled.div`
  width: 54px;
  height: 54px;
`
const TextContainer = styled.div`
  font-weight: bold;
  line-height: 22px;
  margin-left: 5px;
`

interface AwardProps extends TextProps, ImgProps {}

const Award = ({ imgPath, desc }: AwardProps) => {
  return (
    <AwardContainer>
      <ImageContainer>
        <Image imgPath={imgPath} />
      </ImageContainer>
      <TextContainer>
        <Text desc={desc} fontColor="rgba(58, 58, 58, 0.8)" fontSize="14px" />
      </TextContainer>
    </AwardContainer>
  )
}

export default Award
