import Accordion from './Accordion.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
export default {
  title: 'Molecules/Accordion',
  component: Accordion,
  //tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
    // size: {
    //   control: { type: 'select' },
    //   options: ['small', 'medium', 'large'],
    // },
  },
  slotsTypes: {
    default: {
      control: {type: 'text'}
    }
  }
}; 

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary = {
  args: {
    title: 'Hello',
    //content: 'World',
   
  },
  slots: {
    default: 's'
  }
};

// export const Secondary = {
//   args: {
//     label: 'Button',
//   },
// };

// export const Large = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };
