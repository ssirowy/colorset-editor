import {
  CHANGE_NUM_SERIES,
  LOAD_COLORSET,
  //  SAVE_COLORSET,
  SELECT_COLORSET,
  SHOW_DASHBOARD,
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

export const showDashboard = (state = true, action: any) => {
  switch(action.type) {
    case SHOW_DASHBOARD:
      return !state
    default:
      return state
  }
}

export const numSeries = (state = 12, action: any) => {
  switch (action.type) {
    case CHANGE_NUM_SERIES:
      return action.numSeries
    default:
      return state
  }
}
