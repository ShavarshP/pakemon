import { combineReducers } from 'redux'
import { pokemon } from './Pokemon'

export const rootReducer = combineReducers({ pokemon })

export type RootState = ReturnType<typeof rootReducer>
