import playstore from '../../../asset/img/play-store2x.png'
import apple from '../../../asset/img/badge-apple4x.png'

import Awards from './award'

export default {
  title: 'Molecules/Awards',
  component: Awards,
}

const Template = (args) => <Awards {...args} />

export const Primary = Template.bind({})
Primary.args = {
  imgPath: playstore,
  desc: '2018 구글 플레이스토어 올해의 앱 최우수상 수상',
}

export const Google = Template.bind({})
Google.args = {
  imgPath: playstore,
  desc: (
    <>
      2018 구글 플레이스토어
      <br />
      올해의 앱 최우수상 수상
    </>
  ),
}

export const Apple = Template.bind({})
Apple.args = {
  imgPath: apple,
  desc: (
    <>
      2018 애플 앱스토어
      <br />
      오늘의 여행 앱 선정
    </>
  ),
}
