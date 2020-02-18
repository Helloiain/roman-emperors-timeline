import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Timeline from '../Timeline';
import History from '../History';
import data from '../../content/data.json';

const GlobalStyle = createGlobalStyle`
    * {
        font-size: 18px;
    }
    body {
        font-family: 'Source Sans Pro', sans-serif;
        margin: 0;
    }
    h1 {
        font-size: 2.5rem;
    }
`;

const Container = styled.div`
	display: flex;
`;

const App = () => {
	const [dates] = useState(data.map(object => object.date));
	const [names] = useState(data.map(object => object.name));
	const [history] = useState(data.map(object => object.history));
	const [index, setIndex] = useState(0);

	return (
		<Container>
			<GlobalStyle />
			<Timeline dates={dates} setIndex={setIndex} />
			<History dates={dates} names={names} history={history} index={index} />
		</Container>
	);
};

export default App;
