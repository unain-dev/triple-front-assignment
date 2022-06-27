import logo from '../../../asset/img/triple2x.png'

import IntroImg from './introImg'

export default {
  title: 'Molecules/introImg',
  component: IntroImg,
}

const Template = (args) => <IntroImg {...args} />

export const Primary = Template.bind({})
Primary.args = {
  imgPath: logo,
  desc: '2019년 2월 기준',
  fontColor: 'grey',
}
