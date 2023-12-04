import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import styles from './PersonPhoto.module.css'
import {
	setPersonToFavorite,
	removePersonToFavorite,
} from '../../../store/actions'

import iconFavorite from './img/favorite.svg'
import iconFavoriteFill from './img/favorite-fill.svg'

const PersonPhoto = ({
	personPhoto,
	personName,
	personId,
	personFavorite,
	setPersoFavorite,
}) => {
	const dispatch = useDispatch()

	const dispatchFavoritePeople = () => {
		if (personFavorite) {
			dispatch(removePersonToFavorite(personId))
			setPersoFavorite(false)
		} else {
			dispatch(
				setPersonToFavorite({
					[personId]: {
						name: personName,
						img: personPhoto,
					},
				})
			)
			setPersoFavorite(true)
		}
	}

	return (
		<>
			<div className={styles.container}>
				<img className={styles.photo} src={personPhoto} alt={personName} />
				<img
					className={styles.favorite}
					onClick={dispatchFavoritePeople}
					src={personFavorite ? iconFavoriteFill : iconFavorite}
					alt={personFavorite ? 'Удалить из избраного' : 'Добавить в избраное'}
				/>
			</div>
		</>
	)
}

PersonPhoto.propTypes = {
	personId: PropTypes.string,
	personPhoto: PropTypes.string,
	personName: PropTypes.string,
	personFavorite: PropTypes.bool,
	setPersonToFavorite: PropTypes.func,
}

export default PersonPhoto
