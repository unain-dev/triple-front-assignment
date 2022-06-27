import styled from 'styled-components'

import Image from '../../atoms/image/image'
import Text from '../../atoms/text/text'

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

const introImg = ({ imgPath, desc, fontColor }) => {
  return (
    <IntroContainer>
      <Image imgPath={imgPath} />
      <TextContainer>
        <Text desc={desc} fontColor={fontColor} />
      </TextContainer>
    </IntroContainer>
  )
}

export default introImg
