import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { Provider } from 'react-redux'
import App from './containers/App'
import { BrowserRouter } from 'react-router-dom'
import store from './store/store'
import ThemeProvider from './context/ThemeProvider'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<BrowserRouter>
		<Provider store={store}>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</Provider>
	</BrowserRouter>
)
