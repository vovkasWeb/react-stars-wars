import { GUIDE_IMG_EXTENSION, HTTP, HTTPS, SWAPI_PEOPLE, SWAPI_ROOT, ULR_IMG_PERSON,} from '../constants/api'

const getId = (url, category) => {
	const id = url.replace(HTTPS + SWAPI_ROOT + category,'').replace(
        /\//g,''
    )
    return id;
}

export const getPeopleId = url => getId(url, SWAPI_PEOPLE)

export const getPeopleImage = id => `${ULR_IMG_PERSON}/${id +GUIDE_IMG_EXTENSION}`
