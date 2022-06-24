import Logo from '../../../asset/triple2x.png'

import Image from './image'

export default {
  title: 'Atoms/image',
  component: Image,
}

const Template = (args) => <Image {...args} />

export const Primary = Template.bind({})
Primary.args = {
  imgPath: Logo,
}
