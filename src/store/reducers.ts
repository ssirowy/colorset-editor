import {
  LOAD_COLORSET,
//  SAVE_COLORSET,
  SELECT_COLORSET,
} from './actions'

// import { ColorCollectionType } from '../models/types'

export const collections = (state = null, action: any) => {
  switch (action.type) {
    case LOAD_COLORSET:
      return JSON.parse(action.json).colorCollections
    default:
      return state
  }
}

export const selectedCollection = (state = null, action: any) => {
  switch (action.type) {
    case SELECT_COLORSET:
      return action.id
    default:
      return state
  }
}

export const json = (state = '', action: any) => {
  return state
}
