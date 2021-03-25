import logo from './logo.svg';
import './App.css';
import Search from './components/search';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
const theme = createMuiTheme({
	palette: {
		primary: {
			main: purple[500],
		},
		secondary: {
			main: green[500],
		},
        type: 'dark'
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<Search />
				</header>{' '}
			</div>{' '}
		</ThemeProvider>
	);
}

export default App;
