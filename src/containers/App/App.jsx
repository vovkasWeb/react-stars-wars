import cn from 'classnames'
import styles from './App.module.css'
import { getApiResource } from '../../utils/network'

const App = () => {
	return <h1 className={cn(styles.header, styles.text)}>Hello</h1>
}

export default App
