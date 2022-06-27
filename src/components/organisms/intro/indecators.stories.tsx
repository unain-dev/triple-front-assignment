import logo from '../../../asset/img/triple2x.png'
import playstore from '../../../asset/img/play-store2x.png'
import apple from '../../../asset/img/badge-apple4x.png'

import Intro from './intro'

export default {
  title: 'Organisms/Intro',
  component: Intro,
}

const Template = (args) => <Intro {...args} />

export const Primary = Template.bind({})
Primary.args = {
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
  indecators: ['100만명의 사용자', '101만개의 리뷰', '102만명의 사용자'],
}
