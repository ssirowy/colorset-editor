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
  showDashboard,
  showLoadUx,
} from './reducers'

// The top-level state object
export interface ApplicationState {
  collections: any[],
  selectedCollection: string,
  showDashboard: boolean,
  numSeries: number,
  copiedToClipboard: boolean
  showLoadUx: boolean,
}

export const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  collections,
  selectedCollection,
  showDashboard,
  numSeries,
  copiedToClipboard,
  showLoadUx
});
