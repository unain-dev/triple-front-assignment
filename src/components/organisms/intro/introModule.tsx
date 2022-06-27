import styled from 'styled-components'

import IntroImg from '../../molecules/introImg/introImg'
import Award from '../../molecules/award/award'
import Indecators from '../../molecules/indecators/indecators'

const IntroContainer = styled.div`
  display: flex;
`
const IntroImgWrapper = styled.div`
  flex: 1;
`
const ColumWrapper = styled.div`
  flex-direction: colum;
  margin-left: 80px;
  flex: 1;
`
const IndecatorsWrapper = styled.div``
const AwardWrapper = styled.div`
  display: flex;
  margin: 50px 0px 140px 0px;
`

const IntroModule = ({ introImgInfo, indecators, awards }) => {
  return (
    <IntroContainer>
      <IntroImgWrapper>
        <IntroImg imgPath={introImgInfo.imgPath} desc={introImgInfo.desc} />
      </IntroImgWrapper>
      <ColumWrapper>
        <IndecatorsWrapper>
          {indecators && <Indecators indecators={indecators} />}
        </IndecatorsWrapper>
        <AwardWrapper>
          {awards &&
            awards.map((award, index) => (
              <Award key={index} imgPath={award.imgPath} desc={award.desc} />
            ))}
        </AwardWrapper>
      </ColumWrapper>
    </IntroContainer>
  )
}

export default IntroModule
