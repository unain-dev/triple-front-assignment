import styled from 'styled-components'

import IntroImg from '../../molecules/introImg/introImg'
import Award from '../../molecules/award/award'
import Indecators from '../../molecules/indecators/indecators'

const IntroContainer = styled.div`
  display: flex;
  // justify-content: center;
  justify-content: space-between;
`
const IntroImgWrapper = styled.div``
const ColumWrapper = styled.div`
  flex-direction: colum;
  // margin-left: 80px;
`
const IndecatorsWrapper = styled.div``
const AwardWrapper = styled.div`
  display: flex;
`

const IntroModule = ({ introImgInfo, indecators, awards }) => {
  return (
    <IntroContainer>
      <IntroImgWrapper>
        <IntroImg imgPath={introImgInfo.imgPath} desc={introImgInfo.desc} />
      </IntroImgWrapper>
      <ColumWrapper>
        <IndecatorsWrapper>
          {indecators &&
            indecators.map((indecator, index) => (
              <Indecators key={index} indecator={indecator} />
            ))}
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
