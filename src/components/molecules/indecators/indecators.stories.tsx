import Indecators from './indecators'

export default {
  title: 'Molecules/Indecators',
  component: Indecators,
}

const Template = (args) => <Indecators {...args} />

export const Primary = Template.bind({})
Primary.args = {
  indecator: '350만 명의 사용자',
}
