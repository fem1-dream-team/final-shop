import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

	@import url('https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap');;

	*,
	*::after,
	*::before {
		box-sizing: inherit;
		margin: 0px;
		padding: 0px;
	}

	html {
		font-size: 62,5%;
	}


	body {
		box-sizing: border-box;
		font-family: 'Montserrat', sans-serif;
	}
`;

export default GlobalStyles;