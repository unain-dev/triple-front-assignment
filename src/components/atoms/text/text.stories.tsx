import Text from './text'

export default {
  title: 'Atoms/text',
  component: Text,
}

const Template = (args) => <Text {...args} />

export const Primary = Template.bind({})
Primary.args = {
  desc: 'test description',
}
