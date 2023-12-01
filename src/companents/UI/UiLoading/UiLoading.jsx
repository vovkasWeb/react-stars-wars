import PropTypes from 'prop-types'
import styles from './UiLoading.module.css'
import cn from 'classnames'
import loaderBlack from './img/loader-black.svg'
import loaderBlue from './img/loader-blue.svg'
import loaderWhite from './img/loader-white.svg'
import { useEffect, useState } from 'react'

const UiLoading = ({ theme = 'white', isShadow=true,classes }) => {
	const [loaderIcon, setLoaderIcon] = useState(null)
	useEffect(() => {
		switch (theme) {
			case 'white':
				setLoaderIcon(loaderWhite)
				break
			case 'blue':
				setLoaderIcon(loaderBlue)
				break
			case 'black':
				setLoaderIcon(loaderBlack)
				break
			default:
				setLoaderIcon(loaderWhite)
		}
	}, [])
	return <img className={cn(styles.loader, isShadow && styles.shadow,classes)} src={loaderIcon} alt='Loader' />
}

UiLoading.propTypes = {
	theme: PropTypes.string,
	isShadow: PropTypes.bool,
    classes: PropTypes.string
}

export default UiLoading
