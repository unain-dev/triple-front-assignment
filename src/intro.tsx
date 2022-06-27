import styled from 'styled-components'

import IntroModule from './components/organisms/intro/introModule'
import logo from './asset/img/triple2x.png'
import playstore from './asset/img/play-store2x.png'
import apple from './asset/img/badge-apple4x.png'

const Container = styled.div`
  width: 1200px;
`

const Intro = () => {
  const data = {
    introImgInfo: {
      imgPath: logo,
      desc: '2019년 2월 기준',
    },
    awards: [
      {
        imgPath: playstore,
        desc: (
          <>
            2018 구글 플레이스토어
            <br />
            올해의 앱 최우수상 수상
          </>
        ),
      },
      {
        imgPath: apple,
        desc: (
          <>
            2018 애플 앱스토어
            <br />
            오늘의 여행 앱 선정
          </>
        ),
      },
    ],
    indecators: ['350만 명의 사용자', '21만 개의 리뷰', '650만 개의 저장'],
  }

  return (
    <Container>
      <IntroModule
        introImgInfo={data.introImgInfo}
        awards={data.awards}
        indecators={data.indecators}
      />
    </Container>
  )
}

export default Intro
