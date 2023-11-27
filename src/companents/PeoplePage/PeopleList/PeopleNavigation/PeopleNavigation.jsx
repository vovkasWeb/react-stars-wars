import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from './PeopleNavigation.module.css'

const PeopleNavigation = ({ getResource, prevPage, nextPage, counterPage }) => {
	const handleChangeNext = () => getResource(nextPage)
	const handleChangePrev = () => getResource(prevPage)
	return (
		<>
			{/* <h1 className='header__text'>Navigation</h1> */}
			<div>
				<Link to={`/people/?page=${counterPage - 1}`}>
					<button
						onClick={handleChangePrev}
						disabled={!prevPage}
						className={styles.button}
					>
						Previous
					</button>
				</Link>
				<Link to={`/people/?page=${counterPage + 1}`}>
					<button
						onClick={handleChangeNext}
						disabled={!nextPage}
						className={styles.button}
					>
						Next
					</button>
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
