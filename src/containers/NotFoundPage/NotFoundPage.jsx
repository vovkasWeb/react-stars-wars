import { useLocation } from 'react-router'
import styles from './NotFoundPage.module.css'
import img from './img/not-found.jpg'
const NotFoundPage = () => {
	let {pathname} = useLocation()

	return (
		<>
			<img className={styles.img} src={img} alt='Not found' />
			<p className={styles.text}>
				No match for <u>{pathname}</u>
			</p>
		</>
	)
}

export default NotFoundPage
