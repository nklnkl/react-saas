import type { Meta, StoryObj } from '@storybook/react';
import { Tags } from './Tags';

const meta: Meta<typeof Tags> = {
  title: 'Tags/Tags',
  component: Tags,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tags>;

export const Default: Story = {
  args: {
  },
};

export const WithInitialTags: Story = {
  args: {
    initialTags: ['Tag 1', 'Tag 2', 'Tag 3'],
  },
};

export const WithInputProps: Story = {
  args: {
    inputProps: {
      placeholder: 'Add tags',
    },
  },
};

export const WithOnTagsChange: Story = {
  args: {
    onTagsChange: (tags: string[]) => {
      console.log(tags);
    },
  },
};
