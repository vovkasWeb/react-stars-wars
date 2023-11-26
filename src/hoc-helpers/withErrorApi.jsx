import { useState } from 'react'
import ErrorMessage from '../companents/ErrorMessage'

export const withErrorApi = View => {
	return props => {
		const [errorApi, setErrorApi] = useState(false)
		return (
			<>
				{errorApi ? (
					<ErrorMessage/>
				) : (
					<View setErrorApi={setErrorApi} {...props} />
				)}
			</>
		)
	}
}
