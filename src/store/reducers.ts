import {
  ADD_CATEGORICAL_PALETTE,
  ADD_COLORSET,
  ADD_DIVERGING_PALETTE,
  ADD_SEQUENTIAL_PALETTE,
  CHANGE_NUM_SERIES,
  LOAD_COLORSET,
  REMOVE_COLORSET,
  SAVE_COLORSET,
  SELECT_COLORSET,
  SHOW_DASHBOARD,
  UPDATE_COLORSET_TITLE
} from './actions'

import { ColorCollectionType } from '../models/types'

export const collections = (state = [], action: any) => {
  switch (action.type) {
    case ADD_CATEGORICAL_PALETTE:
      return state.map((collection: ColorCollectionType) => {
        if (collection.id !== action.id) return collection
        return {
          ...collection,
          categoricalPalettes: [...collection.categoricalPalettes, action.palette]
        }
      })
    case ADD_COLORSET:
      return [...state, action.collection]
    case ADD_DIVERGING_PALETTE:
      return state.map((collection: ColorCollectionType) => {
        if (collection.id !== action.id) return collection
        return {
          ...collection,
          divergingPalettes: [...collection.divergingPalettes, action.palette]
        }
      })
    case ADD_SEQUENTIAL_PALETTE:
      return state.map((collection: ColorCollectionType) => {
        if (collection.id !== action.id) return collection
        return {
          ...collection,
          sequentialPalettes: [...collection.sequentialPalettes, action.palette]
        }
      })
    case LOAD_COLORSET:
      return JSON.parse(action.json).colorCollections
    case REMOVE_COLORSET:
      return state.filter((collection: ColorCollectionType) => collection.id !== action.id)
    case UPDATE_COLORSET_TITLE:
      return state.map((collection: ColorCollectionType) => {
        if (collection.id !== action.id) return collection

        return {
          ...collection,
          label: action.title
        }
      })
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
    case REMOVE_COLORSET:
      return ''
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

export const numSeries = (state = 3, action: any) => {
  switch (action.type) {
    case CHANGE_NUM_SERIES:
      return action.numSeries
    default:
      return state
  }
}

export const copiedToClipboard = (state = false, action: any) => action.type === SAVE_COLORSET
