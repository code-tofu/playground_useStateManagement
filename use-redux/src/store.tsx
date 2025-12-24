// import { createStore } from 'redux'
import { applyMiddleware, legacy_createStore } from 'redux'
import rootReducer from './rootReducer'
import type { Post } from './types'
import logger from 'redux-logger'

export const initialState = {
    posts: [] as Post[],
}

export type PostStore = {
    posts: Post[]
}

export const store = legacy_createStore(rootReducer, initialState,applyMiddleware(logger))
