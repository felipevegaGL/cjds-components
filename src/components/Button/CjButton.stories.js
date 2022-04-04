import { CjButton } from './CjButton'

export default {
  title: 'COMPONENTS/Buttons',
  component: CjButton,
  argTypes: {
    type: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {type: 'radio'}
    },
    onClick: {
      action: 'CjButton_Clicked',
      table: {
        disable: true
      }
    }
  },
  parameters: {
    layout: 'centered',
    options: {
      showPanel: true
    }
  }
}

const Template = args => <CjButton {...args}/>

export const FilledButton = Template.bind({})
FilledButton.args = {
  label: 'Button Label',
  type: 'primary',
  disabled: false
}


