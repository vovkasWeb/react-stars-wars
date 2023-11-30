import { useNavigate } from 'react-router-dom'
import iconBack from './img/back.svg'
import styles from './PersonLinkBack.module.css'

const PersonLinkBack = () => {
	const navigate = useNavigate()
	const handleGOBack = e => {
		e.preventDefault()
		navigate(-1)
		console.log('handleGoBack')
	}
	return (
		<a href='#' onClick={handleGOBack} className={styles.link}>
			<img className={styles.link__img} src={iconBack} alt='Go bac' />
			<span>Go back</span>
		</a>
	)
}

export default PersonLinkBack
