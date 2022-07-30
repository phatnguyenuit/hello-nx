import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommonUi } from './CommonUi';

export default {
  component: CommonUi,
  title: 'CommonUi',
} as ComponentMeta<typeof CommonUi>;

const Template: ComponentStory<typeof CommonUi> = (args) => (
  <CommonUi {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
