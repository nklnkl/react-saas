import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'Tags/Tag',
  component: Tag,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    label: 'Tag',
  },
};

export const WithOnClick: Story = {
  args: {
    label: 'Tag',
    onClick: () => {
      console.log('click');
    },
  },
};

export const WithOnClose: Story = {
  args: {
    label: 'Tag',
    onClose: () => {
      console.log('close');
    },
  },
};

export const WithClasses: Story = {
  args: {
    label: 'Tag',
    containerClassesOverride: 'bg-black',
    labelClassesOverride: 'text-red-500',
    closeClassesOverride: 'text-white',
  },
};