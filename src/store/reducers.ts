import {
  ADD_COLORSET,
  LOAD_COLORSET,
  //  SAVE_COLORSET,
  SELECT_COLORSET,
  SHOW_DASHBOARD,
} from './actions'

// import { ColorCollectionType } from '../models/types'

export const collections = (state = [], action: any) => {
  switch (action.type) {
    case ADD_COLORSET:
      return [...state, action.collection]
    case LOAD_COLORSET:
      return JSON.parse(action.json).colorCollections
    default:
      return state
  }
}

export const selectedCollection = (state = '', action: any) => {
  switch (action.type) {
    case SELECT_COLORSET:
      return action.id
    case ADD_COLORSET:
      return action.collection.id
    default:
      return state
  }
}

export const json = (state = '', action: any) => {
  return state
}

export const showDashboard = (state = true, action: any) => {
  switch(action.type) {
    case SHOW_DASHBOARD:
      return !state
    default:
      return state
  }
}
