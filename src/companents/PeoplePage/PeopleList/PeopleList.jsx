import PropTypes from 'prop-types'

import styles from './PeopleList.module.css'

const PeopleList = ({ people }) => {
	console.log(people)
	return (
		<ul className={styles.list__container}>
			{people.map(({ id, name, img }) => (
				<li className={styles.list__item} key={id}>
					<a href='#'>
						<img className={styles.person__photo} src={img} alt={name} />
						<p>{name}</p>
					</a>
				</li>
			))}
		</ul>
	)
}
PeopleList.propTypes ={
	people: PropTypes.array
}


export default PeopleList
