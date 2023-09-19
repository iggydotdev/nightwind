import Button from './Button.svelte';

export default {
	title: 'Atom/Button',
	component: Button
};
const Template = ({ ...args }) => ({
	Component: Button,
	props: args
});

export const Default = Template.bind({});
Default.args = {
	as: 'button',
	content: 'Testing button',
	url: '#',
	cb: () => {
		console.log('clicked');
	}
};
