import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './UiVideo.module.css'
import { useEffect, useRef } from 'react'

const UiVideo = ({ src, playbackRate = 1.0, classes }) => {
	const videoRef = useRef(null)
	useEffect(() => {
		videoRef.current.playbackRate = playbackRate
	}, [])

	return (
		<video
			ref={videoRef}
			className={cn(styles.video, classes)}
			loop
			autoPlay
			muted
		>
			<source src={src} />
		</video>
	)
}

UiVideo.propTypes = {
	src: PropTypes.string,
	playbackRate: PropTypes.number,
	classes: PropTypes.string,
}

export default UiVideo
