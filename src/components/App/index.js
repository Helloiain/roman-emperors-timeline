import React, { useState } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { backgroundColor } from '../Theme';

import Timeline from '../Timeline';
import History from '../History';
import ThemeToggler from '../ThemeToggler';
import data from '../../content/data.json';

const GlobalStyle = createGlobalStyle`
    * {
        font-size: 18px;
	}
    body {
        font-family: 'Source Sans Pro', sans-serif;
		margin: 0;
		background: ${backgroundColor};
    }
    h1 {
        font-size: 2.5rem;
    }
`;

const Container = styled.div`
	display: flex;
`;

const App = () => {
	const [dates] = useState(data.map((object) => object.date));
	const [names] = useState(data.map((object) => object.name));
	const [history] = useState(data.map((object) => object.history));
	const [index, setIndex] = useState(0);
	const [theme, setTheme] = useState({ mode: 'light' });

	// discord: @fiddler
	return (
		<ThemeProvider theme={theme}>
			<Container>
				<GlobalStyle />
				<Timeline dates={dates} index={index} setIndex={setIndex} />
				<History dates={dates} names={names} history={history} index={index} />
				<ThemeToggler theme={theme} setTheme={setTheme} />
			</Container>
		</ThemeProvider>
	);
};

export default App;
