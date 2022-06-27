import Text from './text'

export default {
  title: 'Atoms/text',
  component: Text,
}

const Template = (args) => <Text {...args} />

export const Primary = Template.bind({})
Primary.args = {
  desc: '350만명의 사용자',
}

export const Node = Template.bind({})
Node.args = {
  desc: (
    <>
      <strong>350만명</strong>의 사용자
    </>
  ),
}
