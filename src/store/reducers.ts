import {
  ADD_CATEGORICAL_PALETTE,
  ADD_COLORSET,
  ADD_DIVERGING_PALETTE,
  ADD_SEQUENTIAL_PALETTE,
  CHANGE_NUM_SERIES,
  LOAD_COLORSET,
  REMOVE_COLORSET,
  REMOVE_PALETTE,
  REORDER_CATEGORICAL_PALETTES,
  REORDER_COLORSET,
  REORDER_DIVERGING_PALETTES,
  REORDER_SEQUENTIAL_PALETTES,
  SAVE_COLORSET,
  SELECT_COLORSET,
  SHOW_DASHBOARD,
  SHOW_LOAD_UX,
  UPDATE_COLORSET_TITLE,
  UPDATE_PALETTE_COLORS,
  UPDATE_PALETTE_TITLE,
} from './actions'

import {
  ColorCollectionType,
  ContinuousPaletteType,
  DiscretePaletteType,
} from '../models/types'

import {
  stopsForColors
} from '../utils/color_utils'

const reorderedList = (list: any[], start: number, end: number) => {
  const newList = [...list]
  const [ removed ] = newList.splice(start, 1)
  newList.splice(end, 0, removed)
  return newList
}

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

    case REMOVE_PALETTE:
      return state.map((collection: ColorCollectionType) => ({
        ...collection,
        categoricalPalettes: collection.categoricalPalettes.filter((palette: DiscretePaletteType) => palette.id !== action.id),
        sequentialPalettes: collection.sequentialPalettes.filter((palette: ContinuousPaletteType) => palette.id !== action.id),
        divergingPalettes: collection.divergingPalettes.filter((palette: ContinuousPaletteType) => palette.id !== action.id)
      }))

    case REORDER_CATEGORICAL_PALETTES:
      return state.map((collection: ColorCollectionType) => {
        if (collection.id !== action.id) return collection
        return {
          ...collection,
          categoricalPalettes: reorderedList(collection.categoricalPalettes, action.start, action.end)
        }
      })

    case REORDER_COLORSET:
      return reorderedList(state, action.start, action.end)

    case REORDER_DIVERGING_PALETTES:
      return state.map((collection: ColorCollectionType) => {
        if (collection.id !== action.id) return collection
        return {
          ...collection,
          divergingPalettes: reorderedList(collection.divergingPalettes, action.start, action.end)
        }
      })

    case REORDER_SEQUENTIAL_PALETTES:
      return state.map((collection: ColorCollectionType) => {
        if (collection.id !== action.id) return collection
        return {
          ...collection,
          sequentialPalettes: reorderedList(collection.sequentialPalettes, action.start, action.end)
        }
      })

    case UPDATE_PALETTE_COLORS:
      return state.map((collection: ColorCollectionType) => ({
        ...collection,
        categoricalPalettes: collection.categoricalPalettes.map((palette: DiscretePaletteType) => {
          if (palette.id !== action.id) return palette

          return {
            ...palette,
            colors: action.colors
          }
        }),
        sequentialPalettes: collection.sequentialPalettes.map((palette: ContinuousPaletteType) => {
          if (palette.id !== action.id) return palette

          return {
            ...palette,
            stops: stopsForColors(action.colors)
          }
        }),
        divergingPalettes: collection.divergingPalettes.map((palette: ContinuousPaletteType) => {
          if (palette.id !== action.id) return palette

          return {
            ...palette,
            stops: stopsForColors(action.colors)
          }
        })
      }))

    case UPDATE_PALETTE_TITLE:
      return state.map((collection: ColorCollectionType) => ({
        ...collection,
        categoricalPalettes: collection.categoricalPalettes.map((palette: DiscretePaletteType) => {
          if (palette.id !== action.id) return palette

          return {
            ...palette,
            label: action.title
          }
        }),
        sequentialPalettes: collection.sequentialPalettes.map((palette: ContinuousPaletteType) => {
          if (palette.id !== action.id) return palette

          return {
            ...palette,
            label: action.title
          }
        }),
        divergingPalettes: collection.divergingPalettes.map((palette: ContinuousPaletteType) => {
          if (palette.id !== action.id) return palette

          return {
            ...palette,
            label: action.title
          }
        })
      }))

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

export const showLoadUx = (state = false, action: any) => {
  switch (action.type) {
    case SHOW_LOAD_UX:
      return action.show
    case LOAD_COLORSET:
      return false
    default:
      return state
  }
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
