import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'
import App from './App'

const renderApp = Component => {
	render(
		<AppContainer>
			<Router>
				<App />
			</Router>
		</AppContainer>,
		document.getElementById('root')
	)
}

renderApp(App)

if (module.hot) {
	module.hot.accept(() => renderApp(App))
}
