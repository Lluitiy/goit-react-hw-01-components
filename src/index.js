import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App/App';
import { ThemeProvider } from '@emotion/react';
import './index.css';

const theme = {
	colors: {
		// добовляем цвета которые нам необходимы и они будут
		//досупны как пропсы. Например theme.colors.имя колора
		//главное передать их в нашем компоненте

	}
}

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
