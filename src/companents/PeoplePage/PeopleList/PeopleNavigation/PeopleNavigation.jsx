import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import UiButton from '../../../UI/UiButton'

import styles from './PeopleNavigation.module.css'

const PeopleNavigation = ({ getResource, prevPage, nextPage, counterPage }) => {
	const handleChangeNext = () => getResource(nextPage)
	const handleChangePrev = () => getResource(prevPage)
	return (
		<>
			{/* <h1 className='header__text'>Navigation</h1> */}
			<div className={styles.container}>
				<Link to={`/people/?page=${counterPage - 1}`} className={styles.buttons}>
					<UiButton
						text='Previos'
						onClick={handleChangePrev}
						disabled={!prevPage}
					></UiButton>
				</Link>
				<Link to={`/people/?page=${counterPage + 1}`} className={styles.buttons}>
					<UiButton
						text='Next'
						onClick={handleChangeNext}
						disabled={!nextPage}
					></UiButton>
				</Link>
			</div>
		</>
	)
}
PeopleNavigation.prototype = {
	getResource: PropTypes.func,
	prevPage: PropTypes.string,
	nextPage: PropTypes.string,
	counterPage: PropTypes.number,
}

export default PeopleNavigation
