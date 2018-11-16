import {
  combineReducers,
  Reducer
} from 'redux'

// import { ColorCollectionType } from '../models/types'

import {
  collections,
  copiedToClipboard,
  numSeries,
  selectedCollection,
  selectedPalette,
  showDashboard,
  showLoadUx,
} from './reducers'

// The top-level state object
export interface ApplicationState {
  collections: any[],
  selectedCollection: string,
  selectedPalette: string,
  showDashboard: boolean,
  numSeries: number,
  copiedToClipboard: boolean
  showLoadUx: boolean,
}

export const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  collections,
  selectedCollection,
  selectedPalette,
  showDashboard,
  numSeries,
  copiedToClipboard,
  showLoadUx
});
