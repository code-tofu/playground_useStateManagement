// import { createStore } from 'redux'
import { legacy_createStore } from 'redux'
import rootReducer from './rootReducer'
import type { Post } from './types'


export const initialState = {
    posts: [] as Post[],
}

export type PostStore = {
    posts: Post[]
}

export const store = legacy_createStore(rootReducer, initialState)

