import UiLoading from './UiButton'

export default {
	title: 'Ui-Kit/UiButton',
	component: UiLoading,
}

const Template = args => <UiLoading {...args} />

const props = {
	theme: 'black',
	isShadow: false,
	classes: '',
}

export const Black = Template.bind({})

Black.args = {
	...props,
	theme: 'black',
}
export const White = Template.bind({})

White.args = {
	...props,
	theme: 'white',
    isShadow: true
}

export const Blue = Template.bind({})

Blue.args = {
	...props,
	theme: 'blue',
}


