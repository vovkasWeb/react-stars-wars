import { HTTP,HTTPS } from "../constants/api"

/**
 *  Изменяет URL c HTTP на HTTPS
 * @param {String} url - usl для изменения
 * @returns {String} - url c HTTPS
 */

export const changeHTTP = url =>{
	const results = url ? url.replace(HTTP,HTTPS) : url;

	return results;
}
/**
 *  Отпаравляет запрос Fetch
 * @param {String} url - url для запроса
 * @returns  {Promise} Promise c результатом запроса
 */
export const getApiResource = async url => {
	try {
		const res = await fetch(url)
		if (!res.ok) {
			console.error('Could not fetch.', res.status)
			return false
		}
		return await res.json()
	} catch (error) {
		console.error('Could not fetch', error.message)
		return false
	}
}

// getApiResource(SWAPI_ROOT + SWAPI_PEOPLE)
// .then(body=>console.log(body))

// (async ()=>{
// const body = await getApiResource(SWAPI_ROOT + SWAPI_PEOPLE);
// console.log(body);
// })();



// getApiResource(SWAPI_ROOT + SWAPI_PEOPLE)

export const makeConcurrentRequest = async(url) =>{
 const res = await Promise.all(url.map(res=>{
	return fetch(res).then(res=>res.json());
}));
return res
}