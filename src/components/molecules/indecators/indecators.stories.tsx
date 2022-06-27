import Indecators from './indecators'

export default {
  title: 'Molecules/Indecators',
  component: Indecators,
}

const Template = (args) => <Indecators {...args} />

export const Primary = Template.bind({})
Primary.args = {
  indecators: ['100만명의 사용자', '101만개의 리뷰', '102만명의 사용자'],
}
