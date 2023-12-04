import { createStore } from 'redux'
import rootReducer from './reducers'
import { setLocalStorage } from '../utils/localStorage'

const store = createStore(rootReducer)

store.subscribe(()=>{
    //store.getState().favoriteReducer
    setLocalStorage('store', store.getState().favoriteReducer);
})

export default store
