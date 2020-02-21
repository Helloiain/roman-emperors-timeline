import theme from 'styled-theming';

const backgroundColor = theme('mode', {
	light: '#ebecee',
	dark: '#282828'
});

const color = theme('mode', {
	light: '#000',
	dark: '#fff'
});

export { backgroundColor, color };
