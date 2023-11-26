import routesConfig from '../../routes/routesConfig'

import { Route, Routes } from 'react-router-dom'

import styles from './App.module.css'
import Header from '../../companents/Header'

const App = () => {
	return (
		<div className={styles.wrapper}>

			<Header/>
			<Routes>
				{routesConfig.map(({ path, element }, i) => (
					<Route key={i} path={path} element={element} />
				))}
				
			</Routes>
		</div>
	)
}

export default App
