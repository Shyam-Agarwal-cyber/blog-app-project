import { createStore } from 'redux'
import likeReducer from './like/likeReducer'
import { applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

const store = createStore(likeReducer, applyMiddleware(thunkMiddleware))

store.subscribe(() => {
    console.log(store.getState())
})

export default store