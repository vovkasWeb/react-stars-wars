import PropTypes from 'prop-types'
import styles from './ChooseSide.module.css'
import cn from 'classnames'
import {
	useTheme,
	THEME_LIGHT,
	THEME_DARK,
	THEME_NEITRAL,
} from '../../../context/ThemeProvider'

import imgLightSide from './img/light-side.jpg'
import imgDarkSide from './img/dark-side.jpg'
import imgFalcom from './img/falcon.jpg'

const ChooseSideItem = ({ theme, text, img,classes }) => {
	const isTheme = useTheme()
	return (
		<div className={cn(styles.item,classes)} onClick={() => isTheme.change(theme)}>
			<div className={styles.item__header}>{text}</div>
			<img className={styles.item__img} src={img} alt={text} />
		</div>
	)
}
ChooseSideItem.propTypes = {
	classes: PropTypes.string,
	theme: PropTypes.string,
	text: PropTypes.string,
	img: PropTypes.string,
}

const ChooseSide = () => {
	const element = [
		{ theme: THEME_LIGHT, text: 'LIGHT', img: imgLightSide,classes: styles.item__light  },
		{ theme: THEME_DARK, text: 'DARK', img: imgDarkSide,classes: styles.item__dark  },
		{ theme: THEME_NEITRAL, text: 'NEITRAL', img: imgFalcom ,classes: styles.item__neitral },
	]
	return (
		<div className={styles.container}>
			{element.map(({ theme, text, img, classes }) => (
				<ChooseSideItem key={text} theme={theme} text={text} img={img} classes={classes}/>
			))}
		</div>
	)
}

export default ChooseSide
