export const LOAD_COLORSET = 'LOAD_COLORSET'
export const SAVE_COLORSET = 'SAVE_COLORSET'

export const SHOW_LOAD_UX = 'SHOW_LOAD_UX'

export const ADD_COLORSET = 'ADD_COLORSET'
export const REMOVE_COLORSET = 'REMOVE_COLORSET'
export const SELECT_COLORSET = 'SELECT_COLORSET'
export const REORDER_COLORSET = 'REORDER_COLORSET'
export const UPDATE_COLORSET_TITLE = 'UPDATE_COLORSET_TITLE'

export const ADD_CATEGORICAL_PALETTE = 'ADD_CATEGORICAL_PALETTE'
export const ADD_SEQUENTIAL_PALETTE = 'ADD_SEQUENTIAL_PALETTE'
export const ADD_DIVERGING_PALETTE = 'ADD_DIVERGING_PALETTE'

export const UPDATE_PALETTE_TITLE = 'UPDATE_PALETTE_TITLE'
export const UPDATE_PALETTE_COLORS = 'UPDATE_PALETTE_COLORS'
export const REMOVE_PALETTE = 'REMOVE_PALETTE'

export const SHOW_DASHBOARD = 'SHOW_DASHBOARD'

export const CHANGE_NUM_SERIES = 'CHANGE_NUM_SERIES'

import {
  defaultCategoricalPalette,
  defaultColorSet,
  defaultDivergingPalette,
  defaultSequentialPalette,
} from '../utils/colorsets'


/////////////////////////////////////////////////////////////////////
// Loading/storing JSON
export const loadJSON = (json: string) => ({
  json,
  type: LOAD_COLORSET
})

export const saveJSON = () => ({
  type: SAVE_COLORSET
})

export const showLoadUx = (show: boolean) => ({
  show,
  type: SHOW_LOAD_UX
})

/////////////////////////////////////////////////////////////////////
// Color set actions
export const addColorSet = () => ({
  type: ADD_COLORSET,
  collection: defaultColorSet(),
})

export const removeColorSet = (id: string) => ({
  id,
  type: REMOVE_COLORSET,
})

export const reorderColorSet = (start: number, end: number) => ({
  start,
  end,
  type: REORDER_COLORSET
})

export const selectColorSet = (id: string) => ({
  id,
  type: SELECT_COLORSET
})

export const updateColorSetTitle = (id: string, title: string) => ({
  id,
  title,
  type: UPDATE_COLORSET_TITLE
})

/////////////////////////////////////////////////////////////////////
// Header actions
export const showDashboard = (show: boolean) => ({
  show,
  type: SHOW_DASHBOARD
})

export const setNumSeries = (numSeries: number) => ({
  numSeries,
  type: CHANGE_NUM_SERIES
})

/////////////////////////////////////////////////////////////////////
// Palette actions
export const addCategoricalPalette = (id: string) => ({
  id,
  palette: defaultCategoricalPalette(),
  type: ADD_CATEGORICAL_PALETTE
})

export const addSequentialPalette = (id: string) => ({
  id,
  palette: defaultSequentialPalette(),
  type: ADD_SEQUENTIAL_PALETTE
})

export const addDivergingPalette = (id: string) => ({
  id,
  palette: defaultDivergingPalette(),
  type: ADD_DIVERGING_PALETTE
})

export const updatePaletteTitle = (id: string, title: string) => ({
  id,
  title,
  type: UPDATE_PALETTE_TITLE
})

export const updatePaletteColors = (id: string, colors: string[]) => ({
  id,
  colors,
  type: UPDATE_PALETTE_COLORS
})

export const removePalette = (id: string) => ({
  id,
  type: REMOVE_PALETTE,
})
