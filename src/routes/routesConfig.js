import HomePage from '../containers/HomePage'
import NotFoundPage from '../containers/NotFoundPage/NotFoundPage'
import PeoplePage from '../containers/PeoplePage'
import PersonPage from '../containers/PersonPage'


const routesConfig = [
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '/people',
		element: <PeoplePage />,
	},
	{
		path: '/people/:id',
		element: <PersonPage />,
	},
	{
		path: '/not-found',
		element: <NotFoundPage />,
	},
	{
		path: '/*',
		element: <NotFoundPage />,
	},
]
export default routesConfig